import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';

import {Provider} from 'react-redux';
import {Provider as AntProvider} from '@ant-design/react-native';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import configureStore from './src/app/store/configure.store';
import rootSaga from './src/app/saga/index.saga';

import HomePage from './src/app/page/home-tab/home.page';
import LoginPage from './src/app/page/authentication/login.page';
import DetailsPage from './src/app/page/home-tab/detail.page';
import SettingsPage from './src/app/page/settings-tab/settings.page';
import HomeModal from './src/app/modal/home.modal';
import SwitchLanguagePage from './src/app/page/settings/switch-language.page';
import I18n from './src/app/util/i18n.util';

const HomePageStack = createStackNavigator({
    Home: {screen: HomePage},
    Details: DetailsPage,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTrackColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const HomeStack = createStackNavigator({
    Main: HomePageStack,
    HomeModal,
    LoginModal: LoginPage
}, {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
});

const SettingsStack = createStackNavigator({
    Settings: SettingsPage,
    SwitchLanguage: SwitchLanguagePage,
});

const RootStack = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
});
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    constructor() {
        super();
        this.state = {
            storeCreated: false,
            storeRehydrated: false,
            store: null
        };
    }

    /*-----Lifecycle Part-----*/
    componentDidMount() {
        configureStore(() => {
            this.setState({storeRehydrated: true});
        }, this.initialState).then((store) => {
            this.setState({
                store,
                storeCreated: true,
            });

            store.runSaga(rootSaga);
        });
    }

    /*-----Methods Part-----*/
    /**
     * 初始化状态机
     * @param rehydratedStore
     */
    initialState(rehydratedStore) {
        // 初始化语言
        const lang = rehydratedStore.getState().language.lang;
        I18n.setLanguage(lang);
        console.log('初始化语言：' + lang);
    }

    /*-----Render Part-----*/
    render() {
        if (!this.state.storeCreated || !this.state.storeRehydrated) {
            // TODO app启动页
            return <View><Text>Loading!!!</Text></View>;
        }
        return (
            <Provider store={this.state.store}>
                <AntProvider locale={zh_CN}>
                    <AppContainer/>
                </AntProvider>
            </Provider>);
    }
}


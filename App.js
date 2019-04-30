import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';

import {Provider} from 'react-redux';
import {Provider as AntProvider} from '@ant-design/react-native';
import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import configureStore from './src/app/store/configure.store';
import rootSaga from './src/app/saga/index.saga';


import HomePage from './src/app/page/home-tab/home.page';
import LoginPage from './src/app/page/authentication/login.page';
import DetailsPage from './src/app/page/home-tab/detail.page';
import SettingsPage from './src/app/page/settings-tab/settings.page';
import HomeModal from './src/app/modal/home.modal';
import SwitchLanguagePage from './src/app/page/settings/switch-language.page';

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
            // 持久化数据merge完毕
            this.setState({storeRehydrated: true});
        }).then((store) => {
            this.setState({
                store,
                storeCreated: true,
            });

            store.runSaga(rootSaga);
        });
    }

    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    render() {
        if (!this.state.storeCreated || !this.state.storeRehydrated) {
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


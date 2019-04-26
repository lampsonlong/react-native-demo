import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {DetailsScreen} from './src/app/page/home-tab/detail.page';
import {SettingsPage} from './src/app/page/settings-tab/settings.page';
import HomePage from './src/app/page/home-tab/home.page';
import {ProfilePage} from './src/app/page/settings-tab/profile.page';
import LoginPage from './src/app/page/authentication/login.page';
import {HomeModal} from './src/app/modal/home.modal';

// import {Provider} from "@ant-design/react-native";
// import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';
import configureStore from './src/app/store/configure.store';
import rootSaga from './src/app/saga/index.saga';

const HomePageStack = createStackNavigator({
    Home: {screen: HomePage},
    Details: DetailsScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const HomeStack = createStackNavigator({
    Main: HomePageStack,
    HomeModal: HomeModal,
    LoginModal: LoginPage
}, {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
});

const SettingsStack = createStackNavigator({
    Settings: SettingsPage,
    Profile: ProfilePage,
});

const RootStack = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
});
const AppContainer = createAppContainer(RootStack);

const store = configureStore();

// run root saga
store.runSaga(rootSaga);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>);
    }
}


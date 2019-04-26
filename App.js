import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';

import {Provider} from 'react-redux';
import {Provider as AntProvider} from '@ant-design/react-native';
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import configureStore from './src/app/store/configure.store';
import rootSaga from './src/app/saga/index.saga';


import HomePage from './src/app/page/home-tab/home.page';
import LoginPage from './src/app/page/authentication/login.page';
import DetailsPage from './src/app/page/home-tab/detail.page';
import SettingsPage from './src/app/page/settings-tab/settings.page';
import ProfilePage from './src/app/page/settings-tab/profile.page';
import HomeModal from './src/app/modal/home.modal';

const HomePageStack = createStackNavigator({
    Home: {screen: HomePage},
    Details: DetailsPage,
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
    HomeModal,
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
                <AntProvider locale={zh_CN}>
                    <AppContainer />
                </AntProvider>
            </Provider>);
    }
}


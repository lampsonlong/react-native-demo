import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {MoviePage} from './src/page/movie/movie.page';
import {DetailsScreen} from './src/page/home-tab/detail.page';
import {SettingsPage} from './src/page/settings-tab/settings.page';
import HomePage from './src/page/home-tab/home.page';
import {ProfilePage} from './src/page/settings-tab/profile.page';
import {HomeModal} from './src/modal/home.modal';

// import {Provider} from "@ant-design/react-native";
// import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';
import configureStore from './src/store/ConfigureStore';

const HomePageStack = createStackNavigator({
    Home: {screen: HomePage},
    Details: DetailsScreen,
    MoviePage,
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
    TestModal: HomeModal
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

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>);
    }
}


import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HomePage from '../page/home-tab/home.page';
import LoginPage from '../page/authentication/login.page';
import DetailsPage from '../page/home-tab/detail.page';
import SettingsPage from '../page/settings-tab/settings.page';
import HomeModal from '../modal/home.modal';
import SwitchLanguagePage from '../page/settings/switch-language.page';

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

export default RootStack;

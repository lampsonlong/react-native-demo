import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HomePage from '../page/home-tab/home.page';
import LoginPage from '../page/authentication/login.page';
import DetailsPage from '../page/home-tab/detail.page';
import SettingsPage from '../page/settings-tab/settings.page';
import HomeModal from '../modal/home.modal';
import SwitchLanguagePage from '../page/settings/switch-language.page';
import NavTest1Page from "../page/nav-test/nav-test1.page";
import NavTest2Page from "../page/nav-test/nav-test2.page";
import NavTest3Page from "../page/nav-test/nav-test3.page";

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

const NewTestStack = createStackNavigator({
    NewNavTest1: NavTest1Page,
    NewNavTest2: NavTest2Page,
    NewNavTest3: NavTest3Page,
});

const NavTestStack = createStackNavigator({
    NavTest1: NavTest1Page,
    NavTest2: NavTest2Page,
    NavTest3: NavTest3Page,
    NewTestStack: NewTestStack,
});

const HomeStack = createStackNavigator({
    Main: HomePageStack,
    HomeModal,
    LoginModal: LoginPage,
    NavTest: NavTestStack,
}, {
    initialRouteName: 'Main',
    // mode: 'modal',
    // headerMode: 'none',
});

const SettingsStack = createStackNavigator({
    Settings: SettingsPage,
    SwitchLanguage: SwitchLanguagePage,
});

const TabsStack = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
});

const RootStack = createStackNavigator({
    Tab: TabsStack,
}, {
    initialRouteName: 'Tab',
    headerMode: 'none',
});


export default RootStack;

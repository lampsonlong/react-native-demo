import {createStackNavigator} from 'react-navigation';
import TabsStack from './tabs.router';
import AuthStack from './auth.router';

const RootStack = createStackNavigator({
    Tab: TabsStack,
    Auth: AuthStack,
}, {
    initialRouteName: 'Tab',
    headerMode: 'none',
});

export default RootStack;

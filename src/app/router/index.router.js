import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import TabsStack from './tabs.router';
import AuthStack from './auth.router';
import {OrderListStack, OrderConfirmStack} from './order.router';

const RootStack = createStackNavigator({
    Tab: TabsStack,
    Auth: AuthStack,
    OrderList: OrderListStack,
    OrderConfirm: OrderConfirmStack,
}, {
    initialRouteName: 'Tab',
    headerMode: 'none',
});

export default RootStack;

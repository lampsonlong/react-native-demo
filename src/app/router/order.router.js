import {createStackNavigator} from 'react-navigation';
import OrderListPage from '../page/order/order-list.page';
import OrderConfirmPage from '../page/order/order-confirm.page';
import OrderResultPage from '../page/order/order-result.page';

export const OrderListStack = createStackNavigator({
    OrderList: OrderListPage,
}, {
});

export const OrderConfirmStack = createStackNavigator({
    OrderConfirm: OrderConfirmPage,
    OrderResult: OrderResultPage,
}, {
});
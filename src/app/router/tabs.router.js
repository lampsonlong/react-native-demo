import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import store from '../store/store';
import {Text} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Tabs1Page from '../page/tabs/tabs1.page';
import Tabs2Page from '../page/tabs/tabs2.page';
import Tabs3Page from '../page/tabs/tabs3.page';
import Tabs4Page from '../page/tabs/tabs4.page';

const TabsStack = createBottomTabNavigator({
    Tabs1: Tabs1Page,
    Tabs2: Tabs2Page,
    Tabs3: Tabs3Page,
    Tabs4: Tabs4Page,
}, {
    initialRouteName: 'Tabs1',
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focusd, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Tabs1') {
                iconName = 'home';
            } else if (routeName === 'Tabs2') {
                iconName = 'timeline';
            } else if (routeName === 'Tabs3') {
                iconName = 'store';
            } else if (routeName === 'Tabs4') {
                iconName = 'person';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={26} color={tintColor} style={{marginTop: 5, marginBottom: 5}}/>;
        },
        tabBarLabel: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let label;
            if (routeName === 'Tabs1') {
                label = 'tab1';
            } else if (routeName === 'Tabs2') {
                label = 'tab2';
            } else if (routeName === 'Tabs3') {
                label = 'tab3';
            } else if (routeName === 'Tabs4') {
                label = 'tab4';
            }

            return <Text style={{color: tintColor, fontSize: 12, textAlign: 'center'}}>{label}</Text>;
        },
        tabBarOnPress: ({navigation, defaultHandler}) => {
            const routeName = navigation.state.routeName;
            switch (routeName) {
                case 'Tabs1':
                case 'Tabs2':
                case 'Tabs3':
                    // 默认跳转
                    return defaultHandler();
                case 'Tabs4':
                    // 自定义路由
                    const state = store.getState();
                    if (state.global.isLogin) {
                        // 若已登录，默认跳转
                        return defaultHandler();
                    } else {
                        // 若未登录，则跳转至登录
                        return navigation.navigate('Login');
                    }
            }
        },
    }),
    // resetOnBlur: true, // 这种方式是重置所有嵌套导航器的状态
    tabBarOptions: {
        activeTintColor: '#D9343E',
        inactiveTintColor: '#878787',
        labelStyle: {
            fontSize: 10, // 选项卡标签的样式对象
        },
        tabStyle: { // 选项卡的样式对象
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        style: {
            width: '100%',
        },
    },
});

export default TabsStack;

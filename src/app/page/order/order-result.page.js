import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationActions, StackActions } from 'react-navigation';

class OrderResultPage extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: (<Icon
            name="arrow-back"
            size={28}
            color="#262628"
            style={{paddingLeft: 10}}
            onPress={() => navigation.goBack(null)}
        />),
        title: '下单成功',
        headerStyle: {
            borderBottomWidth: 0,
        }
    });

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    /**
     * 下单
     */
    goToOrderList = () => {
        // 重置路由
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Tab', action: NavigationActions.navigate({
                        routeName: 'Tabs4',
                    }),
                }),
                NavigationActions.navigate({ routeName: 'OrderList' })
            ],
        });
        this.props.navigation.dispatch(resetAction);
        // this.props.navigation.reset('OrderList');
    };

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.goToOrderList()} title={'我的订单列表'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(OrderResultPage);

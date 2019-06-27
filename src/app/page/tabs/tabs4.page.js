import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as globalAction from '../../actions/global.action';

import { NavigationActions, StackActions } from 'react-navigation';

const propTypes = {
    globalAction: PropTypes.object,
};

class Tabs4Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs4 Page';

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    /**
     * 登出
     */
    logout = () => {
        // 执行登出操作

        // 登出成功，清除本地缓存
        const {globalActions} = this.props;
        globalActions.clearLoginInfo();

        // 重置路由
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Tab' }),
                NavigationActions.navigate({ routeName: 'Auth' })
            ],
        });
        this.props.navigation.dispatch(resetAction);
        // this.props.navigation.navigate('Login');
    };

    goToOrderList = () => {
        this.props.navigation.navigate('OrderList');
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <Button onPress={() => this.goToOrderList()} title={'订单列表'} />
                <Button onPress={() => this.logout()} title={'登出'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
Tabs4Page.propTypes = propTypes;

const mapStateToProps = (state) => {
    const {global} = state;
    return {
        global,
    };
};

const mapDispatchToProps = (dispatch) => {
    const globalActions = bindActionCreators(globalAction, dispatch);
    return {
        globalActions,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs4Page);

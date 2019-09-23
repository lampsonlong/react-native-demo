import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as globalAction from '../../actions/global.action';
import InputTextComponent from '../../components/input-text.component';
import InputSelectComponent from '../../components/input-select.component';

import { NavigationActions, StackActions } from 'react-navigation';
import PickerComponent from "../../components/picker.component";

const propTypes = {
    globalAction: PropTypes.object,
};

class Tabs4Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs4 Page';

    state = {
        realName: {
            value: '',
            error: '',
            valid: false,
        },
        height: {
            value: '',
            error: '',
            valid: false,
        },
    };

    weightPickList = [
        {id: '1', value: '丰腴'},
        {id: '2', value: '凹凸'},
        {id: '3', value: '匀称'},
        {id: '4', value: '清瘦'},
    ];
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

    validateRealName = (realName) => {
        if (realName && realName.length >= 2 && realName.length <= 6) {
            this.setState({
                realName: {
                    value: realName,
                    error: '',
                    valid: true,
                }
            });
        } else {
            this.setState({
                realName: {
                    value: realName,
                    error: '请输入正确的姓名',
                    valid: false,
                }
            });
        }
    };

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <Button onPress={() => this.goToOrderList()} title={'订单列表'} />
                <Button onPress={() => this.logout()} title={'登出'} />
                <View style={{width: '80%'}}>
                    <InputTextComponent
                        item={this.state.realName}
                        label="姓名"
                        type="text"
                        placeholder="请输入您的姓名"
                        onChange={(value) => { this.validateRealName(value); }}
                    />
                    <InputSelectComponent
                        item={this.state.height}
                        label="体型"
                        placeholder="请选择你的体型"
                        pickList={this.weightPickList}
                        onSelect={(value) => console.log(value)}
                    />
                </View>
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

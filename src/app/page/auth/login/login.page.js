import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as globalAction from '../../../actions/global.action';

const propTypes = {
    globalAction: PropTypes.object,
};

class LoginPage extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: (<Icon
            name="arrow-back"
            size={28}
            color="#262628"
            style={{paddingLeft: 10}}
            onPress={() => navigation.goBack(null)}
        />),
        title: '登录',
        headerStyle: {
            borderBottomWidth: 0,
        }
    });

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    /**
     * 登录
     */
    login = () => {
        // 执行登录操作

        // 登录成功，缓存ak
        const {globalActions} = this.props;
        const loginInfo = {
            ak: 'accessToken',
        };
        globalActions.setLoginInfo(loginInfo);

        // 返回
        this.props.navigation.goBack(null);
    };

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.props.navigation.navigate('Register')} title={'去注册'} />
                <Button onPress={() => this.props.navigation.navigate('ForgetPassword')} title={'忘记密码'} />
                <Button onPress={() => this.login()} title={'登录'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
LoginPage.propTypes = propTypes;

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
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

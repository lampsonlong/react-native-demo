import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import {Button, List, InputItem, WhiteSpace, WingBlank} from '@ant-design/react-native';
import I18n from '../../util/i18n.util';

import * as loginAction from '../../actions/login.actions';

const propTypes = {
    loginActions: PropTypes.object,
};

class LoginPage extends Component {
    /*-----Data Part-----*/
    static navigationOptions = {
        title: 'LoginPoi',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTrackColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    /*-----Constructor Part-----*/
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    /*-----Lifecycle Part-----*/
    componentDidMount() {
    }

    /*-----Methods Part-----*/
    onLoginBtnClick = () => {
        // 执行登录操作
        const {loginActions} = this.props;
        const params = {
            username: this.state.username,
            password: this.state.password,
        };
        console.log('params', params);
        loginActions.login(params);
    };

    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {loginIn} = this.props;
        return (

            <ScrollView
                style={{flex: 1, marginTop: 50}}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <WingBlank>
                    <List renderHeader="登录">
                        <InputItem
                            clear
                            error
                            value={this.state.username}
                            onChange={(username) => {
                                this.setState({
                                    username,
                                });
                            }}
                            placeholder={I18n.t('login.usernamePH')}
                        />
                        <InputItem
                            type="password"
                            clear
                            error
                            value={this.state.password}
                            onChange={(password) => {
                                this.setState({
                                    password,
                                });
                            }}
                            placeholder={I18n.t('login.passwordPH')}
                        />
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button
                            loading={loginIn.loginBtnLoading}
                            onPress={this.onLoginBtnClick}
                        >
                            登录!!!!!
                        </Button>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Text>状态: {loginIn.status}</Text>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button
                            onPress={() => this.props.navigation.goBack()}
                        >
                            {I18n.t('button.close')}
                        </Button>
                    </List>
                </WingBlank>
            </ScrollView>
        );
    }
}

LoginPage.propTypes = propTypes;

const mapStateToProps = (state) => {
    const {loginIn} = state;
    const {language} = state;
    return {
        loginIn,
        language,
    };
};

const mapDispatchToProps = (dispatch) => {
    const loginActions = bindActionCreators(loginAction, dispatch);
    return {
        loginActions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

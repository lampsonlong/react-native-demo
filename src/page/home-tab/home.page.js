import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Switch, WhiteSpace} from '@ant-design/react-native';

import CounterComponent from '../../component/counter.component';

import * as loginAction from '../../actions/login-actions';
import * as counterAction from '../../actions/counter-actions';

const propTypes = {
    loginActions: PropTypes.object,
    counterActions: PropTypes.object,
};

class HomePage extends Component {
    /*-----Data Part-----*/
    static navigationOptions = {
        title: 'HomePoi',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    /*-----Constructor Part-----*/
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    /*-----Lifecycle Part-----*/
    componentDidMount() {
        // // 页面进入时获取数据
        // const { loginActions } = this.props;
        // console.log(loginActions);
        // loginActions.login();
    }

    /*-----Methods Part-----*/
    test = () => {
        // 更新数据
        const { loginActions } = this.props;
        console.log(loginActions);
        loginActions.login();
    };

    onSwitchChange = (value) => {
        this.setState({
            checked: value,
        });
    };

    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {loginIn} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    type="primary"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                    })}
                >
                    Go to Details
                </Button>
                <Text>MoviePage</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('TestModal', {
                        itemId: 0,
                    })}
                >
                    Go to Modal
                </Button>

                <Text>状态: {loginIn.status}
                </Text>
                <Button
                    loading={loginIn.loginBtnLoading}
                    onPress={this.test}
                >
                    登录!!!!!
                </Button>
                <CounterComponent {...this.props} />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Switch
                    checked={this.state.checked}
                    onChange={this.onSwitchChange}
                    disabled={!!this.state.checked}
                />
                <WhiteSpace />
                <Text>{this.state.checked ? '自闭中，并且无法关闭' : '开启自闭'}</Text>
            </View>
        );
    }
}

HomePage.propTypes = propTypes;

const mapStateToProps = (state) => {
    const { loginIn } = state;
    const { counter } = state;
    return {
        loginIn,
        counter
    };
};

const mapDispatchToProps = (dispatch) => {
    const loginActions = bindActionCreators(loginAction, dispatch);
    const counterActions = bindActionCreators(counterAction, dispatch);
    return {
        loginActions,
        counterActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

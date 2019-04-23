import {connect} from 'react-redux'; // 引入connect函数
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from '@ant-design/react-native';

import CounterComponent from '../../component/counter.component';

import * as loginAction from '../../actions/login-actions';
import * as counterAction from '../../actions/counter-actions';

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

    /*-----Lifecycle Part-----*/

    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {login} = this.props;
        const {count, incrementFn, decrementFn} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    type="primary"
                    loading
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

                <Text>状态: {this.props.status}
                </Text>
                <Button
                    onPress={() => login()}
                >
                    登录!!!!!
                </Button>
                <CounterComponent incrementFn={incrementFn} decrementFn={decrementFn} counter={count} />
            </View>
        );
    }
}

export default connect(
    state => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
        count: state.counter.count,
    }),
    dispatch => ({
        login: () => dispatch(loginAction.login()),
        incrementFn: () => dispatch(counterAction.increment()),
        decrementFn: () => dispatch(counterAction.decrement()),
    })
)(HomePage);

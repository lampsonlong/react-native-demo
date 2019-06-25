import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Switch, WhiteSpace} from '@ant-design/react-native';
import I18n from '../../util/i18n.util';

import CounterComponent from '../../component/counter.component';

import * as counterAction from '../../actions/counter.actions';

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
        headerTrackColor: '#000',
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
    componentWillMount() {
    }

    componentDidMount() {

    }

    /*-----Methods Part-----*/
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
                    {I18n.t('detail')}
                </Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button
                    onPress={() => this.props.navigation.navigate('HomeModal', {
                        itemId: 0,
                    })}
                >
                    Go to Modal
                </Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button
                    onPress={() => this.props.navigation.navigate('LoginModal')}
                >
                    Go to Login
                </Button>
                <Text>状态: {loginIn.status}
                </Text>
                <CounterComponent {...this.props} />
                <WhiteSpace />
                <WhiteSpace />
                <Switch
                    checked={this.state.checked}
                    onChange={this.onSwitchChange}
                    disabled={!!this.state.checked}
                />
                <WhiteSpace />
                <Text>{this.state.checked ? '自闭中，并且无法关闭' : '开启自闭'}</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('NewNavTest3')}
                >
                    Go to NewNavTest3
                </Button>
            </View>
        );
    }
}

HomePage.propTypes = propTypes;

const mapStateToProps = (state) => {
    const { loginIn } = state;
    const { counter } = state;
    const { language } = state;
    return {
        loginIn,
        counter,
        language,
    };
};

const mapDispatchToProps = (dispatch) => {
    const counterActions = bindActionCreators(counterAction, dispatch);
    return {
        counterActions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

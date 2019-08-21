import {connect} from 'react-redux';
import React from 'react';
import {View, Text} from 'react-native';
import PhoneVerificationComponent from '../../components/phone-verification.component';
import LongButtonComponent from '../../components/long-button.component';
import {bindActionCreators} from 'redux';
import * as globalAction from '../../actions/global.action';
import PropTypes from 'prop-types';

const propTypes = {
    globalAction: PropTypes.object,
};

class Tabs3Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs3 Page';

    state = {
        isValid: false,
        verification: null,
    };

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    showTopMessage = () => {
        const globalActions = this.props.globalActions;
        globalActions.setTopMessage('已发送短信验证码');
    };

    isValid = (status, value) => {
        this.setState({
            isValid: status,
            verification: value,
        });
    };

    submit = () => {
        console.log('submit', this.state.verification);
        this.showTopMessage();
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <PhoneVerificationComponent isValid={(status, value) => this.isValid(status, value)}/>
                <LongButtonComponent onPress={() => this.submit()} title="提交" disabled={!this.state.isValid} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
Tabs3Page.propTypes = propTypes;

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
export default connect(mapStateToProps, mapDispatchToProps)(Tabs3Page);

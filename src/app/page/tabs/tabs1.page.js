import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button, Animated, Easing} from 'react-native';
import CardComponent from "../../components/card.component";
import {bindActionCreators} from "redux";
import * as globalAction from "../../actions/global.action";
import PropTypes from "prop-types";
import LongButtonComponent from "../../components/long-button.component";

const propTypes = {
    globalAction: PropTypes.object,
};

class Tabs1Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs1 Page';
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    componentDidMount() {
        // this.runAnimate();
    }
    /*-----Methods Part-----*/
    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm');
    };

    showTopMessage = () => {
        const globalActions = this.props.globalActions;
        globalActions.setTopMessage('已发送短信验证码');
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <Button onPress={() => this.goToOrderConfirm()} title={'订单确认'} />
                <LongButtonComponent onPress={() => this.showTopMessage()} title={'显示后端反馈'} />
                <CardComponent/>
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
Tabs1Page.propTypes = propTypes;

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
export default connect(mapStateToProps, mapDispatchToProps)(Tabs1Page);

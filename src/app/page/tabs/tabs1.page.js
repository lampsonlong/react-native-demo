import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button, Animated, Easing} from 'react-native';
import CardComponent from '../../components/card.component';
import {bindActionCreators} from 'redux';
import * as globalAction from '../../actions/global.action';
import PropTypes from 'prop-types';
import LongButtonComponent from '../../components/long-button.component';
import ShortButtonComponent from '../../components/short-button.component';
import TipsBarComponent from "../../components/tips-bar.component";
import NextButtonComponent from "../../components/next-button.component";

const propTypes = {
    globalAction: PropTypes.object,
};

class Tabs1Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs1 Page';

    state = {
        isValid: false,
        verification: null,
        pickerVisible: false,
        loading: false,
    };
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

    submit = () => {
        this.setState({
            loading: true,
        });


        setTimeout(() => {
            this.setState({
                loading: false,
            });

            this.showTopMessage();
        }, 2000);
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <Button onPress={() => this.goToOrderConfirm()} title="订单确认" />
                <TipsBarComponent title={'已开始匹配'} countDown={0}/>
                <CardComponent/>
                <ShortButtonComponent onPress={() => this.submit()} title="提交" disabled={false} loading={this.state.loading} />
                <LongButtonComponent onPress={() => this.showTopMessage()} title="显示后端反馈" disabled={false} />
                <NextButtonComponent onPress={() => this.submit()} title="提交" disabled={false} loading={this.state.loading} />
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

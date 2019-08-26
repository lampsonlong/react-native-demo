import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Picker} from 'react-native';
import PhoneVerificationComponent from '../../components/phone-verification.component';
import LongButtonComponent from '../../components/long-button.component';
import PickerComponent from '../../components/picker.component';
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
        pickerVisible: false,
    };

    pickList = [
        {id: '1', value: '丰腴'},
        {id: '2', value: '凹凸'},
        {id: '3', value: '匀称'},
        {id: '4', value: '清瘦'},
    ];

    switch = false;
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    showTopMessage = () => {
        const globalActions = this.props.globalActions;
        if (this.switch) {
            globalActions.setTopMessage('验证成功');
        } else {
            globalActions.setTopErrorMessage('验证失败');
        }

        this.switch = !this.switch;
    };

    isValid = (status, value) => {
        this.setState({
            isValid: status,
            verification: value,
        });
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
        }, 500);
    };

    showPicker = () => {
        this.setState({
            pickerVisible: true,
        });
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <PhoneVerificationComponent isValid={(status, value) => this.isValid(status, value)}/>
                <LongButtonComponent onPress={() => this.submit()} title="提交" disabled={!this.state.isValid} loading={this.state.loading} />

                <LongButtonComponent onPress={() => this.showPicker()} title="选择你的身材"/>

                <PickerComponent
                    title={'请选择你的体型'}
                    pickList={this.pickList}
                    visible={this.state.pickerVisible}
                    onSelect={(selectedValue) => console.log(selectedValue)}
                    onClose={() => this.setState({pickerVisible: false})}
                />
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

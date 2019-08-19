import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    StyleSheet,
    View,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    InteractionManager,
    Animated, Easing
} from 'react-native';

const propTypes = {
};

class PhoneVerificationComponent extends Component {
    /*-----Data Part-----*/
    inputRef = null;

    config = {
        inputLimit: 4,
    };

    state = {
        verification: '',
        cursorBlinks: new Animated.Value(0),
    };

    cursorBlinksAnimate = null;
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    componentDidMount() {
        this.test();
    }
    /*-----Methods Part-----*/
    test = () => {
        this.cursorBlinksAnimate = Animated.loop(Animated.sequence([
            Animated.timing(
                this.state.cursorBlinks,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.in,
                    useNativeDriver: true
                },
            ),
            Animated.timing(
                this.state.cursorBlinks,
                {
                    toValue: 0,
                    duration: 400,
                    delay: 100,
                    easing: Easing.linear,
                    useNativeDriver: true
                },
            )
        ]));

        this.cursorBlinksAnimate.start();
    };

    onFocus = () => {
        if (!this.inputRef.isFocused()) {
            // 设置焦点
            this.inputRef.focus();
        }
    };

    onChange = (value) => {
        // 输入校验
        const regex = '^[0-9]{0,' + this.config.inputLimit + '}$';
        if (value.length > this.config.inputLimit || !new RegExp(regex).test(value)) {
            return;
        }

        // 动画控制
        if (value.length < this.config.inputLimit) {
            this.cursorBlinksAnimate.start();
        }

        this.setState({
            verification: value,
        });
    };

    renderInputElement = () => {
        const elements = [];
        for (let i = 0; i < this.config.inputLimit; i++) {
            const element = (
                <View key={i} style={this.state.verification.length === i ? styles.activeInput : styles.input}>
                    {this.state.verification.length > i ?
                        <Text style={styles.context}>{this.state.verification[i]}</Text>
                        :
                        <Animated.View style={this.state.verification.length === i ? [styles.focusCursor, {opacity: this.state.cursorBlinks}] : styles.noCursor}/>
                    }
                </View>);

            elements.push(element);
        }

        return elements;
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        // 显示模态框
        return (
            <View>
                <View>
                    <Text>手机验证码</Text>
                </View>
                <View>
                    <TextInput
                        ref={ref => this.inputRef = ref}
                        value={this.state.verification}
                        onChangeText={this.onChange}
                        autoFocus
                        keyboardType="numeric"
                        style={{opacity: 0}}
                    />
                </View>
                <TouchableWithoutFeedback onPress={() => this.onFocus()}>
                    <View style={{flexDirection: 'row'}}>
                        {this.renderInputElement()}
                        {/*<View style={this.state.verification.length === 0 ? styles.activeInput : styles.input}>*/}
                        {/*{this.state.verification.length >= 1 ?*/}
                        {/*<Text style={styles.context}>{this.state.verification[0]}</Text>*/}
                        {/*:*/}
                        {/*<Animated.View style={this.state.verification.length === 0 ? [styles.focusCursor, {opacity: this.state.cursorBlinks}] : styles.noCursor}/>*/}
                        {/*}*/}
                        {/*</View>*/}
                        {/*<View style={this.state.verification.length === 1 ? styles.activeInput : styles.input}>*/}
                        {/*{this.state.verification.length >= 2 ?*/}
                        {/*<Text style={styles.context}>{this.state.verification[1]}</Text>*/}
                        {/*:*/}
                        {/*<Animated.View style={this.state.verification.length === 1 ? [styles.focusCursor, {opacity: this.state.cursorBlinks}] : styles.noCursor}/>*/}
                        {/*}*/}
                        {/*</View>*/}
                        {/*<View style={this.state.verification.length === 2 ? styles.activeInput : styles.input}>*/}
                        {/*{this.state.verification.length >= 3 ?*/}
                        {/*<Text style={styles.context}>{this.state.verification[2]}</Text>*/}
                        {/*:*/}
                        {/*<Animated.View style={this.state.verification.length === 2 ? [styles.focusCursor, {opacity: this.state.cursorBlinks}] : styles.noCursor}/>*/}
                        {/*}*/}
                        {/*</View>*/}
                        {/*<View style={this.state.verification.length === 3 ? styles.activeInput : styles.input}>*/}
                        {/*{this.state.verification.length >= 4 ?*/}
                        {/*<Text style={styles.context}>{this.state.verification[3]}</Text>*/}
                        {/*:*/}
                        {/*<Animated.View style={this.state.verification.length === 3 ? [styles.focusCursor, {opacity: this.state.cursorBlinks}] : styles.noCursor}/>*/}
                        {/*}*/}
                        {/*</View>*/}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    container: {
    },
    input: {
        width: 50,
        height: 56,
        borderBottomColor: '#E6E8EB',
        borderBottomWidth: 2,
        marginHorizontal: 10,
    },
    activeInput: {
        width: 50,
        height: 56,
        borderBottomColor: '#3F5CFC',
        borderBottomWidth: 2,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusCursor: {
        width: 2,
        height: 32,
        backgroundColor: '#3F5CFC',
    },
    noCursor: {
    },
    context: {
        color: '#000',
        fontSize: 32,
        lineHeight: 56,
        textAlign: 'center',
    },
});

/*-----Redux Part-----*/
PhoneVerificationComponent.propTypes = propTypes;

export default PhoneVerificationComponent;

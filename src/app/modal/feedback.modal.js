import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Image, Platform, Animated, Easing} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as globalAction from '../actions/global.action';

const propTypes = {
    globalAction: PropTypes.object,
};

class FeedbackModal extends Component {
    /*-----Data Part-----*/
    state = {
        topValue: new Animated.Value(-100),
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    componentDidMount() {
        // this.runAnimate();
    }
    /*-----Methods Part-----*/
    runAnimate = () => {
        Animated.sequence([
            Animated.timing(
                this.state.topValue,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.bezier(0, 1, 0.5, 1),
                }
            ),
            Animated.timing(
                this.state.topValue,
                {
                    toValue: 0,
                    duration: 2000,
                }
            ),
            Animated.timing(
                this.state.topValue,
                {
                    toValue: -100,
                    duration: 500,
                    easing: Easing.bezier(0.5, 0, 1, 0),
                }
            )
        ]).start();
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {topMessage, isShowTopMessage} = this.props.global;
        if (isShowTopMessage) {
            console.log('执行动画效果');
            this.runAnimate();

            const globalActions = this.props.globalActions;
            globalActions.clearTopMessage();
        }

        // 显示模态框
        return (
            <Animated.View style={[styles.modalContainer, {top: this.state.topValue}]}>
                <View style={styles.container}>
                    <Text style={styles.context}>{topMessage}</Text>
                </View>
            </Animated.View>

        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        backgroundColor: '#7745FF',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: '#C9C3FF',
                shadowOpacity: 0.8,
                shadowRadius: 10,
                shadowOffset: {
                    height: 10,
                    width: 0,
                }
            },
            android: {
                elevation: 2
            },
        }),
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60,
    },
    context: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

/*-----Redux Part-----*/
FeedbackModal.propTypes = propTypes;

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

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackModal);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const propTypes = {
};

class ActivityIndicatorComponent extends Component {
    /*-----Data Part-----*/
    state = {
        rotateDeg: new Animated.Value(0),
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    componentDidMount() {
        this.aminateLoop();
    }
    /*-----Methods Part-----*/
    aminateLoop = () => {
        Animated.loop(
            Animated.timing(
                this.state.rotateDeg,
                {
                    toValue: 360,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                },
            )
        ).start();
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        // 显示模态框
        return (
            <Animated.Image
                style={{
                    width: 20,
                    height: 20,
                    marginLeft: 20,
                    transform: [
                        {
                            perspective: 400,
                        },
                        {
                            rotate: this.state.rotateDeg.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg']
                            }),

                        },
                    ]
                }}
                source={require('../../asset/images/loading.png')}>
            </Animated.Image>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    lgContainer: {
        width: 344,
        height: 44,
        borderRadius: 5,
    },
    context: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 44,
        textAlign: 'center',
    },
});

/*-----Redux Part-----*/
ActivityIndicatorComponent.propTypes = propTypes;

export default ActivityIndicatorComponent;

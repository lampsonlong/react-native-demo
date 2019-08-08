import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, TextInput, Animated, Button, Easing, TouchableWithoutFeedback} from 'react-native';;

const propTypes = {
};

class CardComponent extends Component {
    /*-----Data Part-----*/
    state = {
        spinValue: new Animated.Value(0),
        is90deg: false,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    cardClick = () => {
        this.state.spinValue.addListener((event) => {
            if (event.value >= 90) {
                this.setState({
                    is90deg: true,
                });
            }
        });

        Animated.timing(
            this.state.spinValue,
            {
                toValue: 180,
                duration: 1000,
                easing: Easing.bezier(0.5, 1, 0.5, 1),
                useNativeDriver: true,
            },
        ).start();
    };

    reset = () => {
        this.setState({
            spinValue: new Animated.Value(0),
            is90deg: false,
        });
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        return (
            <View>
                <Button onPress={() => this.reset()} title={'重置动画'}/>
                <TouchableWithoutFeedback
                    onPress={() => this.cardClick()}
                >
                    <Animated.Image
                        style={{
                            width: 150,
                            transform: [
                                {
                                    perspective: 400,
                                },
                                {
                                    rotateY: this.state.spinValue.interpolate({
                                        inputRange: [0, 180],
                                        outputRange: ['0deg', '180deg']
                                    }),

                                },
                                {
                                    scaleX: this.state.is90deg ? -1 : 1,
                                }
                            ]
                        }}
                        source={this.state.is90deg ? require('../../asset/images/vipCard_vip2.png') : require('../../asset/images/vipCard_vip4.png')}
                    >
                    </Animated.Image>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
});

CardComponent.propTypes = propTypes;

export default CardComponent;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

class LongButtonComponent extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {title, onPress} = this.props;
        console.log(this.props.buttonText);
        // 显示模态框
        return (
            <TouchableOpacity onPress={() => onPress()} activeOpacity={0.7}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1530FF', '#7745FF']} style={styles.lgContainer}>
                    <View style={styles.container}>
                        <Text style={styles.context}>{title}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    lgContainer: {
        width: 344,
        height: 44,
        borderRadius: 5,
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
LongButtonComponent.propTypes = propTypes;

export default LongButtonComponent;

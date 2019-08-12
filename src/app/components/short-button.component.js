import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

class ShortButtonComponent extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onPress = () => {
        const {onPress} = this.props;
        const disabled = this.props.disabled === undefined ? false : this.props.disabled;

        if (!disabled) {
            onPress();
        }
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {title} = this.props;
        const disabled = this.props.disabled === undefined ? false : this.props.disabled;

        // 显示模态框
        return (
            <TouchableOpacity onPress={() => this.onPress()} activeOpacity={disabled ? 1 : 0.7} style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[disabled ? '#AEB4BC' : '#1530FF', disabled ? '#AEB4BC' : '#7745FF']} style={styles.lgContainer}>
                    <View>
                        <Text style={styles.context}>{title}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    container: {
    },
    lgContainer: {
        height: 40,
        borderRadius: 22,
    },
    context: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 40,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

/*-----Redux Part-----*/
ShortButtonComponent.propTypes = propTypes;

export default ShortButtonComponent;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActivityIndicatorComponent from './activity-indicator.component';

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
};

class NextButtonComponent extends Component {
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
        const {loading} = this.props;
        const disabled = this.props.disabled === undefined ? false : this.props.disabled;

        // 显示模态框
        return (
            <TouchableOpacity onPress={() => this.onPress()} activeOpacity={disabled ? 1 : 0.7} style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[disabled ? '#AEB4BC' : '#1530FF', disabled ? '#AEB4BC' : '#7745FF']} style={styles.lgContainer}>
                    <View>
                        {loading ? <ActivityIndicatorComponent/> : <Image source={require('../../asset/images/next_arrow.png')}/>}
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
        height: 42,
        width: 42,
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

/*-----Redux Part-----*/
NextButtonComponent.propTypes = propTypes;

export default NextButtonComponent;

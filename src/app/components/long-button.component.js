import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActivityIndicatorComponent from "./activity-indicator.component";

const propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
};

class LongButtonComponent extends Component {
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
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {this.props.loading ? <View style={{width: 40}}/> : <View/> }
                        <Text style={styles.context}>{title}</Text>
                        {this.props.loading ? <ActivityIndicatorComponent style={{marginLeft: 20}}/> : <View/> }
                    </View>
                </LinearGradient>
            </TouchableOpacity>
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
LongButtonComponent.propTypes = propTypes;

export default LongButtonComponent;

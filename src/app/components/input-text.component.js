import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const propTypes = {
    item: PropTypes.object,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    extra: PropTypes.any,
    error: PropTypes.string,
};

class InputTextComponent extends Component {
    /*-----Data Part-----*/
    state = {
        onFocus: false,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onFocus = () => {
        this.setState({
            onFocus: true,
        });
    };

    onBlur = () => {
        this.setState({
            onFocus: false,
        });
    };

    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {item, label, type, placeholder, onChange, maxLength} = this.props;
        return (
            <View>
                <Text style={styles.textLabel}>{label}</Text>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        keyboardType="default"
                        value={item.value}
                        onChangeText={onChange}
                        onFocus={() => this.onFocus()}
                        onBlur={() => this.onBlur()}
                        placeholder={placeholder}
                        secureTextEntry={type === 'password'}
                        maxLength={maxLength}
                        selectionColor="#D9343E"
                        style={[styles.input, this.state.onFocus ? styles.inputOnFocus : styles.inputOnBlur]}
                    />
                </View>
                <Text style={styles.errorText}>{item.error}</Text>
            </View>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5'
    },
    inputOnFocus: {
        borderBottomColor: '#D9343E',
        borderBottomWidth: 1,
    },
    inputOnBlur: {
        borderBottomColor: '#DEDEF0',
        borderBottomWidth: 1,
    },
    errorText: {
        color: '#D9343E',
    },
    textLabel: {
        color: '#AEB4BC',
        fontSize: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 8,
        color: '#D3D6DB',
    }
});

InputTextComponent.propTypes = propTypes;

export default InputTextComponent;

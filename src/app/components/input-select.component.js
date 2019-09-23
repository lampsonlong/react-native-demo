import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, TextInput, Image, TouchableWithoutFeedback} from 'react-native';
import PickerComponent from "./picker.component";

const propTypes = {
    item: PropTypes.object,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string,
    pickList: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

class InputSelectComponent extends Component {
    /*-----Data Part-----*/
    state = {
        pickerVisible: false,
        value: this.props.placeholder,
        isSelected: false,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onClick = () => {
        this.setState({
           pickerVisible: true,
        });
    };

    onPickerSelect = (selectedValue) => {
        this.setState({
            isSelected: true,
            value: selectedValue.value,
        });

        this.props.onSelect(selectedValue);
    };

    onPickerClose = () => {
        // 隐藏选项框
        this.setState({
            pickerVisible: false
        });
    };

    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {item, label, pickList} = this.props;
        return (
            <TouchableWithoutFeedback onPress={()=> this.onClick()}>
                <View>
                    <Text style={styles.textLabel}>{label}</Text>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#DEDEF0'}}>
                        <Text style={this.state.isSelected ? styles.inputed : styles.input}>{this.state.value}</Text>
                        <Image style={{width: 10, height: 18, marginVertical: 8}} source={require('../../asset/images/right_arrow.png')}/>
                    </View>
                    <Text style={styles.errorText}>{item.error}</Text>
                    <PickerComponent
                        title={'请选择你的体型'}
                        pickList={pickList}
                        visible={this.state.pickerVisible}
                        onSelect={(selectedValue) => this.onPickerSelect(selectedValue)}
                        onClose={() => this.onPickerClose()}
                    />
                </View>
            </TouchableWithoutFeedback>
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
    },
    inputed: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 8,
        color: '#0A1F3B',
    }
});

InputSelectComponent.propTypes = propTypes;

export default InputSelectComponent;

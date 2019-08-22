import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, TouchableWithoutFeedback, Modal} from 'react-native';

const propTypes = {
    title: PropTypes.string.isRequired,
    pickList: PropTypes.array.isRequired,
    visible: PropTypes.bool,
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
};

class PickerComponent extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onSelect = (selectedValue) => {
        // 发送选中事件
        this.props.onSelect(selectedValue);
        // 发送关闭事件
        this.props.onClose();
    };

    onCancel = () => {
        // 发送关闭事件
        this.props.onClose();
    };

    renderPickList = () => {
        const elements = [];
        this.props.pickList.forEach((pickData) => {
            const element = (
                <TouchableWithoutFeedback key={pickData.id} onPress={() => this.onSelect(pickData)}>
                    <View style={styles.pickerRow}>
                        <Text style={styles.pickerContent}>{pickData.value}</Text>
                    </View>
                </TouchableWithoutFeedback>);

            elements.push(element);
        });

        return elements;
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        // 显示选择器模态框
        return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.visible}
            >
                <View style={styles.mask}>
                    <View style={styles.modalWrapper}>
                        <View style={styles.picker}>
                            <View style={styles.pickerHeader}>
                                <Text style={styles.pickerHeaderContent}>{this.props.title}</Text>
                            </View>
                            {this.renderPickList()}
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.onCancel()}>
                            <View style={styles.cancelButton}>
                                <Text style={styles.cancelContent}>取消</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    mask: {
        width: '100%',
        height: '100%',
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalWrapper: {
        width: '100%',
        bottom: 0,
    },
    picker: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    pickerHeader: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerRow: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E6E8EB',
    },
    pickerHeaderContent: {
        fontSize: 10,
        color: '#AEB4BC',
    },
    pickerContent: {
        fontSize: 14,
    },
    pickerContentSelected: {
        fontSize: 14,
        color: '#3F5CFC',
    },
    cancelButton: {
        marginTop: 10,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    cancelContent: {
        color: '#007AFF',
        fontSize: 16,
    }
});

/*-----Redux Part-----*/
PickerComponent.propTypes = propTypes;

export default PickerComponent;

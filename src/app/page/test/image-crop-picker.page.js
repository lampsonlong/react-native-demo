import {connect} from 'react-redux';
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Share,
    StyleSheet,
    Platform,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import {Button, Modal, Stepper} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/DoulongwanIcons';

import ImagePicker from 'react-native-image-crop-picker';
import InputPaymentPasswordModal from "../../component/input-payment-password-modal.component";
import {REGEX_PAYMENT_PASSWORD} from "../../const/regex.const";
import * as AssetsService from "../../service/assets.service";
import {ERROR_CODE} from "../../const/error-code.const";
import InputAmountComponent from "../../component/input-amount.component";

class ImageCropPickerPage extends React.Component {
    /*-----Data Part-----*/
    image = null;

    testRef = null;

    state = {
        textValue: '',
        transfer: {
            value: '',
            valid: false,
            error: '',
        },
        loading: false,
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    validateTransferAmount = () => {
        const amount = this.state.transfer.value;
        if (amount && Number(amount) <= Number(999)) {
            this.setState({
                transfer: {
                    value: amount,
                    valid: true,
                },
            });
        } else {
            this.setState({
                transfer: {
                    value: this.state.transfer.value,
                    valid: false,
                },
            });
        }
    };

    onChange = (value) => {
        this.setState({
            textValue: value,
        });
    };

    /**
     * 从相册选择图片
     */
    onClickForOpenGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            this.image = image;
            this.setState({
                ready: true,
            });
        });
    };

    /**
     * 打开相机拍摄照片
     */
    onClickForOpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            this.image = image;
            this.setState({
                ready: true,
            });
        });
    };

    /**
     * 编辑裁剪图片
     */
    editImage = () => {
        alert('editImage');
        ImagePicker.openCropper({
            path: this.image.path,
            width: 300,
            height: 400
        }).then((image) => {
            this.image = image;
            this.setState({
                ready: true,
            });
        });
    };

    /**
     * 分享照片
     * @returns {Promise<void>}
     */
    async onShare(base64Url) {
        try {
            const result = await Share.share({
                title: 'testTitle',
                url: base64Url,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                    alert('分享了！');
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                alert('取消了！');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * 渲染图片
     * @returns {*}
     */
    renderImage = () => {
        if (this.image != null) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableHighlight onPress={() => { this.onClickForOpenGallery(); }}>
                        <View style={styles.shadowTest}>
                            <Image
                                style={{width: '100%', height: '100%'}}
                                source={{uri: `data:${this.image.mime};base64,${this.image.data}`}}
                            />
                        </View>
                    </TouchableHighlight>
                    <Icon name="share" size={40} onPress={() => this.onShare(`data:${this.image.mime};base64,${this.image.data}`)}/>
                </View>
            );
        }

        return null;
    };

    validateSmsCode = () => {

    };

    onSmsCodeModalClose = () => {
        this.setModalVisible(false);
    };

    /*-----Render Part-----*/
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} scrollEnabled={false}>

                <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput
                        type={'text'}
                        placeholder="test"
                        value={this.state.textValue}
                        style={{height: 40, width: '100%', borderColor: 'gray', borderWidth: 1}}
                        keyboardType="number-pad"
                        onChangeText={(value) => this.onChange(value)}
                    />
                    <Button onPress={() => { this.onClickForOpenGallery(); }}>从相册选择图片</Button>
                    <Button onPress={() => { this.onClickForOpenCamera(); }}>打开相机拍摄照片(模拟器无法使用)</Button>
                    {this.renderImage()}
                    <View style={{width: '100%'}}>
                        <InputAmountComponent
                            item={this.state.transfer}
                            placeholder="test"
                            onChange={(amount) => { this.validateTransferAmount(amount); }}
                        />
                    </View>
                    <Icon name="share-tag" size={16} />
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                        <Text>Show Modal</Text>
                    </TouchableHighlight>
                    <InputPaymentPasswordModal
                        visible={this.state.modalVisible}
                        item={this.state.transfer}
                        onChange={(smsCode) => {
                            this.setState({
                                transfer: {
                                    value: smsCode,
                                    valid: false,
                                    error: '',
                                }
                            });
                        }}
                        onBlur={(smsCode) => this.validateSmsCode(smsCode)}
                        onClose={() => this.onSmsCodeModalClose()}
                        title="请输入短信验证码"
                        loading={this.state.loading}
                    />
                </View>
                <Stepper
                    key="1"
                    max={10}
                    min={1}
                    readOnly={true}
                    defaultValue={1}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    shadowTest: {
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.5,
                shadowRadius: 15,
                shadowOffset: {
                    height: 0,
                    width: 0,
                }
            },
            android: {
                elevation: 2
            },
        }),

    }
});


export default connect(null, null)(ImageCropPickerPage);

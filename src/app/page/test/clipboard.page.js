import {connect} from 'react-redux';
import React from 'react';
import {Share, View, Text, Clipboard} from 'react-native';
import {WingBlank, Button, InputItem} from '@ant-design/react-native';

class ClipboardPage extends React.Component {
    /*-----Data Part-----*/
    state = {
        value: null,

    };

    content = '1234567890Aa贼⑥';
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    async onCopyContent() {
        Clipboard.setString(this.content);
    }

    async onClearCopyContent() {
        Clipboard.setString(null);
    }

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.content}</Text>
                <Button onPress={() => this.onCopyContent()}>一键复制</Button>
                <Button onPress={() => this.onClearCopyContent()}>清空剪切板</Button>
                <InputItem
                    clear
                    value={this.state.value}
                    onChange={value => {
                        this.setState({
                            value,
                        });
                    }}
                    placeholder="测试复制内容"
                >
                    输入框
                </InputItem>
            </View>
        );
    }
}

export default connect(null, null)(ClipboardPage);

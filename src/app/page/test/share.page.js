import {connect} from 'react-redux';
import React from 'react';
import {Share, View, Text} from 'react-native';
import {WingBlank, Button} from '@ant-design/react-native';

class SharePage extends React.Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    async onShare() {
        try {
            const result = await Share.share({
                message: 'https://www.baidu.com',
                title: 'testTitle',
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

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.onShare()}>一键分享</Button>
            </View>
        );
    }
}

export default connect(null, null)(SharePage);

import {connect} from 'react-redux';
import React from 'react';
import {Share, View, Text} from 'react-native';
import {WingBlank, Button} from '@ant-design/react-native';

class PushNotificationIosPage extends React.Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    constructor() {
        super();

        // // 申请权限（这玩意应该在首次app进入时弹出）
        // PushNotificationIOS.requestPermissions();
    }

    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onPushNotification = () => {
        // PushNotificationIOS.addEventListener('register', function(token){
        //     console.log('You are registered and the device token is: ' + token)
        // });
        //
        // // 获取当前徽章数量
        // PushNotificationIOS.getApplicationIconBadgeNumber((badgeCount) => {
        //     console.log(badgeCount);
        //     badgeCount = badgeCount + 1;
        //     const details = {
        //         alertBody: '推送消息DEMO!!!',
        //         alertAction: 'view',
        //         userInfo: {
        //             test: 'aaa' // 目前还不知道userInfo有什么用
        //         },
        //         applicationIconBadgeNumber: badgeCount,
        //     };
        //     PushNotificationIOS.presentLocalNotification(details);
        // });
    };

    onClearIconBadge = () => {
        // PushNotificationIOS.setApplicationIconBadgeNumber(0);
    };

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.onPushNotification()}>发送通知，并徽章+1</Button>
                <Button onPress={() => this.onClearIconBadge()}>清空徽章</Button>
            </View>
        );
    }
}

export default connect(null, null)(PushNotificationIosPage);

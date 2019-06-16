import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Button, WhiteSpace, Drawer, List, Icon} from '@ant-design/react-native';

import ImageCropPickerPage from './image-crop-picker.page';
import SharePage from './share.page';
import ClipboardPage from './clipboard.page';
import PushNotificationIosPage from './push-notification-ios.page';
import WebViewPage from './web-view.page';
import ListViewPage from './list-view.page';

import * as userService from '../../service/user.service';
import * as assetsService from '../../service/assets.service';

class DrawerMenuPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '测试DEMO',
        headerRight: (
            <Icon
                name="bars"
                size="md"
                color="#262628"
                style={{paddingRight: 20}}
                onPress={
                    // 这里不能用this，只能用navigation调用执行函数
                    navigation.getParam('openDrawer')
                }
            />
        ),
    });

    state = {
        nav: '0'
    };

    /*-----Constructor Part-----*/

    /*-----Lifecycle Part-----*/
    componentWillMount() {
        const params = {
            pageNumber: 1,
            pageSize: 2,
        };
        // 用户基本信息
        userService.getUserInfo().then(res => {
            console.log('getUserInfo', res);
        });

        // // 推广收益概览
        // assetsService.getPromotionProfitOverview().then(res => {
        //     console.log('getPromotionProfitOverview', res);
        // });
        //
        // // 推广收益明细
        // assetsService.getPromotionProfitDetailList(params).then(res => {
        //     console.log('getPromotionProfitDetailList', res);
        // });
        // //
        // // 我的粉丝
        // assetsService.getPromotionProfitFanList(params).then(res => {
        //     console.log('getPromotionProfitFanList', res);
        // });

        // // 推广收益转收益钱包
        // assetsService.transferPromotionProfitToProfitWallet().then(res => {
        //     console.log('transferPromotionProfitToProfitWallet', res);
        // });
        //
        // // 收益钱包概览
        // assetsService.getProfitOverview().then(res => {
        //     console.log('getProfitOverview', res);
        // });

        // // 收益钱包明细
        // assetsService.getProfitDetailList(params).then(res => {
        //     console.log('getProfitDetailList', res);
        // });

        // // 收益钱包转账至银行钱包
        // assetsService.transferProfitWalletToWallet().then(res => {
        //     console.log('transferProfitWalletToWallet', res);
        // });

        // // 银行钱包概览
        // assetsService.getPaymentWalletOverview().then(res => {
        //     console.log('getPaymentWalletOverview', res);
        // });
        //
        // // 银行钱包明细
        // assetsService.getPaymentWalletDetailList(params).then(res => {
        //     console.log('getPaymentWalletDetailList', res);
        // });

        // // 银行钱包充值
        // assetsService.depositToPaymentWallet({money: '1'}).then(res => {
        //     console.log('depositToPaymentWallet', res);
        // });
        //
        // // 银行钱包提现
        // assetsService.withdrawFromPaymentWallet({money: '100'}).then(res => {
        //     console.log('withdrawFromPaymentWallet', res);
        // });
        //
        // // 银行钱包转账
        // assetsService.transferPaymentWallet().then(res => {
        //     console.log('transferPaymentWallet', res);
        // });
    }

    componentDidMount() {
        this.props.navigation.setParams({openDrawer: this.openDrawer});
    }

    /* -----Methods Part-----*/
    openDrawer = () => {
        this.drawer && this.drawer.openDrawer();
    };

    showChildrenPage = () => {
        switch (this.state.nav) {
            case '0':
                return (<ImageCropPickerPage />);
            case '1':
                return (<SharePage />);
            case '2':
                return (<ClipboardPage />);
            case '3':
                return (<PushNotificationIosPage />);
            case '4':
                return (<WebViewPage />);
            case '5':
                return (<ListViewPage />);
            default:
                return (<ImageCropPickerPage />);
        }
    };

    switchChildrenPage = (nav) => {
        // 切换页面
        this.setState({nav});
        // 关闭菜单
        this.drawer.closeDrawer();
    };

    /* -----Render Part-----*/
    render() {
        const sidebar = (
            <ScrollView style={[styles.container]}>
                <List style={{ flex: 1, padding: 8 }}>
                    <List.Item onPress={() => this.switchChildrenPage('0')}>ImageCropPicker</List.Item>
                    <List.Item onPress={() => this.switchChildrenPage('1')}>Share</List.Item>
                    <List.Item onPress={() => this.switchChildrenPage('2')}>Clipboard</List.Item>
                    <List.Item onPress={() => this.switchChildrenPage('3')}>PushNotificationIOS</List.Item>
                    <List.Item onPress={() => this.switchChildrenPage('4')}>WebViewPage</List.Item>
                    <List.Item onPress={() => this.switchChildrenPage('5')}>ListViewPage</List.Item>
                </List>
            </ScrollView>
        );

        return (
            <Drawer
                sidebar={sidebar}
                open={false}
                drawerRef={el => (this.drawer = el)}
                onOpenChange={this.onOpenChange}
                drawerBackgroundColor="#fff"
                drawerWidth={200}
                position="right"
            >
                <View style={{ flex: 1, padding: 20 }}>
                    <WhiteSpace />
                    {this.showChildrenPage()}
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DrawerMenuPage;

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Button, WhiteSpace, Drawer, List, Icon} from '@ant-design/react-native';

import ImageCropPickerPage from './image-crop-picker.page';
import SharePage from './share.page';
import ClipboardPage from './clipboard.page';
import PushNotificationIosPage from './push-notification-ios.page';

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

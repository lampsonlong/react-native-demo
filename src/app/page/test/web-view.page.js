import {connect} from 'react-redux';
import React from 'react';
import {Share, View, Text, WebView, ScrollView} from 'react-native';
import {WingBlank, Button, ListView} from '@ant-design/react-native';
import * as assetsService from "../../service/assets.service";

class WebViewPage extends React.Component {
    /*-----Data Part-----*/
    webViewRef = null;

    state = {
        zIndex: 1,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    webViewGoBack = () => {
        this.webViewRef.goBack();
    };

    webViewGoForward = () => {
        this.webViewRef.goForward();
    };

    renderItem = (item) => (
        <View style={{}}>
            <Text>12345</Text>
            <Text>12345</Text>
            <Text>666</Text>
        </View>
    );

    renderEmptyView = (item) => (
        <View>
            <Text>Empty View</Text>
        </View>
    );

    renderHeader = (item) => (
        <View>
            <Button onPress={() => this.webViewGoBack()}>后退</Button>
            <Button onPress={() => this.webViewGoForward()}>前进</Button>
        </View>
    );

    _onListScroll = (e) => {
        // console.log('_onListScroll', e.nativeEvent.contentOffset.y);
        const y = e.nativeEvent.contentOffset.y;

        if (y > 100) {

            this.setState({
                zIndex: 9,
            });

            // console.log(this.state.headerOpacity);
        } else {
            this.setState({
                zIndex: 1,
            });
        }
    };
    /**
     * 列表下拉刷新/上拉加载更多
     * @param page
     * @param startFetch
     * @param abortFetch
     * @returns {Promise<void>}
     */
    onFetch = async (
        page = 1,
        startFetch,
        abortFetch
    ) => {
        try {
            // TODO 每页10个（暂定）
            const pageLimit = 20;

            // 获取新分页数据
            assetsService.getProfitDetailList(page, pageLimit).then(res => {
                console.log(res);
                const rowData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
                startFetch(rowData, pageLimit);
            });
        } catch (err) {
            abortFetch();
        }
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{borderColor:'red', borderWidth: 2, height: '100%'}}>
                <View style={{flexDirection: 'row' , position: 'absolute', top: 0, width: '100%', backgroundColor: 'red', zIndex: this.state.zIndex}}>
                    <Button onPress={() => this.webViewGoBack()}>后退</Button>
                    <Button onPress={() => this.webViewGoForward()}>前进</Button>
                </View>
                <View style={{width: '100%', height: '100%', zIndex: 5, backgroundColor: '#fff'}} >
                    {/*<WebView*/}
                        {/*ref={ref => this.webViewRef = ref}*/}
                        {/*source={{uri: 'https://global.bithumb.pro'}}*/}
                        {/*scrollEnabled={false}*/}
                    {/*/>*/}
                    <ListView
                        ref={(ref) => { (this.listView = ref); }}
                        onFetch={this.onFetch}
                        keyExtractor={(item, index) =>
                            `${index}`
                        }
                        renderItem={this.renderItem}
                        numColumns={1}
                        emptyView={this.renderEmptyView}
                        onScroll={this._onListScroll}
                        header={this.renderHeader}
                    />
                </View>
            </View>
        );
    }
}

export default connect(null, null)(WebViewPage);

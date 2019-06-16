import {connect} from 'react-redux';
import React from 'react';
import {Share, View, Text, Clipboard} from 'react-native';
import {WingBlank, Button, InputItem, ListView} from '@ant-design/react-native';
import * as retailService from "../../service/retail.service";
import {ERROR_CODE} from "../../const/error-code.const";

class ListViewPage extends React.Component {
    /*-----Data Part-----*/
    listView = null;

    mockDataList = [
        {id: '1', name: 'test1', num: 5},
        {id: '2', name: 'test2', num: 5},
        {id: '3', name: 'test3', num: 5},
        {id: '4', name: 'test4', num: 5},
        {id: '5', name: 'test5', num: 5},
        {id: '6', name: 'test6', num: 5},
        {id: '7', name: 'test7', num: 5},
        {id: '8', name: 'test8', num: 5},
        {id: '9', name: 'test9', num: 5},
        {id: '10', name: 'test10', num: 5},
    ];

    updateDataList = [
        {id: '1', name: 'test1', num: 4},
        {id: '2', name: 'test2', num: 1},
        {id: '4', name: 'test4', num: 2},
        {id: '5', name: 'test5', num: 0},
        {id: '7', name: 'test7', num: 4},
        {id: '8', name: 'test8', num: 1},
        {id: '10', name: 'test10', num: 0},
    ];

    state = {
        update: false,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    updateList = () => {
        console.log(this.listView);
        const currentRows = this.listView.ulv.getRows();
        const pages = this.listView.ulv.getPage();

        // 更新库存
        currentRows.forEach(currentRow => {
            this.updateDataList.forEach(updateRow => {
                if (updateRow.id === currentRow.id) {
                    currentRow.num = updateRow.num;
                }
            });
        });

        this.listView.ulv.setRows(currentRows);
        this.setState({
            update: !this.state.update,
        });
    };

    renderItem = (item) => {
        return (
            <View style={{width: '100%', height: 80}}>
                <Text>{item.name}</Text>
                <Text>{item.num}</Text>
            </View>
        );
    };

    onFetch = async (
        page = 1,
        startFetch,
        abortFetch
    ) => {
        try {
            // 每页10个（暂定)
            const pageLimit = 10;
            const params = {
                pageNumber: page,
                pageSize: pageLimit,
            };
            const rowData = this.mockDataList;
            startFetch(rowData, pageLimit);
            console.log(this.listView);
        } catch (err) {
            abortFetch();
        }
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={this.updateList}>更新</Button>
                <ListView
                    ref={(ref) => { (this.listView = ref); }}
                    onFetch={this.onFetch}
                    keyExtractor={(item, index) =>
                        `${index}`
                    }
                    renderItem={this.renderItem}
                    numColumns={1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    extraData={this.state.update}
                    style={{width: '100%'}}
                />
            </View>
        );
    }
}

export default connect(null, null)(ListViewPage);

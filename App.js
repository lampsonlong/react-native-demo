import zh_CN from '@ant-design/react-native/lib/locale-provider/zh_CN';

import {Provider} from 'react-redux';
import {Provider as AntProvider} from '@ant-design/react-native';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import configureStore from './src/app/store/configure.store';
import RootStack from './src/app/router/index.router';
import I18n from './src/app/util/i18n.util';

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    constructor() {
        super();
        this.state = {
            storeCreated: false,
            storeRehydrated: false,
            store: null
        };
    }

    /*-----Lifecycle Part-----*/
    componentDidMount() {
        configureStore(() => {
            this.setState({storeRehydrated: true});
        }, this.initialState).then((store) => {
            this.setState({
                store,
                storeCreated: true,
            });
        });
    }

    /*-----Methods Part-----*/
    /**
     * 初始化状态机
     * @param rehydratedStore
     */
    initialState(rehydratedStore) {
        // 初始化处理
    }

    /*-----Render Part-----*/
    render() {
        if (!this.state.storeCreated || !this.state.storeRehydrated) {
            // app启动后，至本地缓存读取完毕前显示的页面
            return <View><Text>Loading!!!</Text></View>;
        }
        return (
            <Provider store={this.state.store}>
                <AntProvider locale={zh_CN}>
                    <AppContainer/>
                </AntProvider>
            </Provider>);
    }
}


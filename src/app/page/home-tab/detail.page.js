import React from 'react';
import {Button, Text, View} from 'react-native';

export class DetailsScreen extends React.Component {
    /* -----Data Part-----*/
    static navigationOptions = ({navigation, navigationOptions}) => ({
        // title: params ? params.otherParam : 'A Nested Details Screen',
        // headerTitle: <HomePage/>,
        headerRight: (
            <Button
                onPress={
                    // 这里的this不能用，只能用navigation调用执行函数
                    navigation.getParam('increaseCount')
                }
                title="+1"
                color="#000"
            />
        ),
        /* These values are used instead of the shared configuration! */
        headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
    });

    state = {
        itemId: 0,
    };

    /* -----Constructor Part-----*/
    /* -----Lifecycle Part-----*/
    /**
     * 页面被加载
     */
    componentDidMount() {
        this.state.itemId = this.props.navigation.getParam('itemId', 0); // 支持默认值
        this.props.navigation.setParams({increaseCount: this._increaseCount});
    }

    /**
     * 页面被销毁
     */
    componentWillUnmount() {
        console.log('DetailsScreen页面被销毁');
    }

    /* -----Methods Part-----*/
    _increaseCount = () => {
        this.state.itemId++;
        // alert(this.state.itemId);
        this.setState({itemId: this.state.itemId});
    };

    /* -----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        // 获取路由传参
        const navigation = this.props.navigation;
        const otherParam = navigation.getParam('otherParam', 'some default value'); // 支持默认值

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen {this.state.itemId} {otherParam}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to First Page!"
                    onPress={() => this.props.navigation.popToTop()}
                />
                {/* <HomePage /> */}
            </View>
        );
    }
}

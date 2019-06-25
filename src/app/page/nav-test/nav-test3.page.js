import React from 'react';
import {Button, Text, View} from 'react-native';

class NavTest3Page extends React.Component {
    /* -----Data Part-----*/
    static navigationOptions = ({navigation, navigationOptions}) => ({
        title: 'Nav Test3 Page',
    });

    state = {
    };

    /* -----Constructor Part-----*/
    /* -----Lifecycle Part-----*/
    /**
     * 页面被加载
     */
    componentDidMount() {
    }

    /**
     * 页面被销毁
     */
    componentWillUnmount() {
        console.log('NavTest3页面被销毁');
    }

    /* -----Methods Part-----*/

    /* -----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Nav Test3</Text>
            </View>
        );
    }
}

export default NavTest3Page;

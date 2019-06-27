import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class OrderListPage extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: (<Icon
            name="arrow-back"
            size={28}
            color="#262628"
            style={{paddingLeft: 10}}
            onPress={() => navigation.goBack(null)}
        />),
        title: '订单列表',
        headerStyle: {
            borderBottomWidth: 0,
        }
    });

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(OrderListPage);

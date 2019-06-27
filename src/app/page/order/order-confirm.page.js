import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class OrderConfirmPage extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: (<Icon
            name="arrow-back"
            size={28}
            color="#262628"
            style={{paddingLeft: 10}}
            onPress={() => navigation.goBack(null)}
        />),
        title: '确认订单',
        headerStyle: {
            borderBottomWidth: 0,
        }
    });

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    /**
     * 下单
     */
    order = () => {
        this.props.navigation.navigate('OrderResult');
    };

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => this.order()} title={'确认下单'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(OrderConfirmPage);

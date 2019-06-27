import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';

class Tabs1Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs1 Page';

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm');
    };
    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <Button onPress={() => this.goToOrderConfirm()} title={'订单确认'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(Tabs1Page);

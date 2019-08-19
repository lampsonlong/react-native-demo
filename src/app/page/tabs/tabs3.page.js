import {connect} from 'react-redux';
import React from 'react';
import {View, Text} from 'react-native';
import PhoneVerificationComponent from '../../components/phone-verification.component';

class Tabs3Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs3 Page';

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
                <PhoneVerificationComponent />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(Tabs3Page);

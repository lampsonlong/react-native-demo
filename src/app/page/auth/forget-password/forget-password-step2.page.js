import {connect} from 'react-redux';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

class ForgetPasswordStep2Page extends React.Component {
    /*-----Data Part-----*/
    static navigationOptions = ({navigation}) => ({
        headerLeft: (<Icon
            name="arrow-back"
            size={28}
            color="#262628"
            style={{paddingLeft: 10}}
            onPress={() => navigation.goBack(null)}
        />),
        title: '忘记密码（第二步）',
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
                <Button onPress={() => this.props.navigation.navigate('ForgetPasswordStep3')} title={'下一步'} />
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(ForgetPasswordStep2Page);

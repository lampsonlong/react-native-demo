import React from "react";
import {Button, Text, View} from "react-native";


export class ProfilePage extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}
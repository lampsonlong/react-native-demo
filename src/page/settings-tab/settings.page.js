import React from "react";
import {Button, Text, View} from "react-native";

export class SettingsPage extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Setting Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}
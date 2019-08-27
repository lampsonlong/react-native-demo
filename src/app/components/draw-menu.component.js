import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerItems, SafeAreaView} from "react-navigation";

const propTypes = {
};

class DrawMenuComponent extends Component {
    /*-----Data Part-----*/
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    goRoute = (routeName) => {
        this.props.navigation.navigate(routeName);
    };

    renderDrawItems = () => {
        const elements = [];
        this.props.items.forEach(item => {
            const element = (
                <TouchableOpacity key={item.key} onPress={() => this.goRoute(item.routeName)}>
                    <View style={this.props.activeItemKey === item.key ? styles.activeItem : styles.inactiveItem}>
                        <Image style={{marginLeft: 30}} source={require('../../asset/images/icon1.png')}/>
                        <Text style={{color: '#fff', marginLeft: 10}}>{item.key}</Text>
                    </View>
                </TouchableOpacity>);

            elements.push(element);
        });

        return elements;
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        console.log(this.props);
        // 显示模态框
        return (
            <LinearGradient style={{height: '100%'}} start={{x: 0, y: 0}} end={{x: 0, y: 1}} locations={[0.05, 0.5, 0.8]} useAngle={true} angle={135} angleCenter={{x: 0.5, y: 0.5}} colors={['#9C4AE3', '#1530FF', '#7745FF']}>
                <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <View style={{marginLeft: 30, marginBottom: 40}}>
                            <View style={{width: 70, height: 70, borderColor: '#88F2F0', borderWidth: 2, borderRadius: 35, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={require('../../asset/images/userIcon.png')} style={{width: 60, height: 60, borderRadius: 30}} />
                            </View>
                            <View style={{borderWidth: 1, borderRadius: 2, borderColor: '#fff', backgroundColor: '#A98CFF', marginTop: -15, height: 24}}>
                                <Text style={{color: '#fff', paddingHorizontal: 10, lineHeight: 24, fontSize: 12}}>编辑资料</Text>
                            </View>
                        </View>
                        <View style={{marginLeft: 10, marginTop: 15}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>Stella Malone</Text>
                            <Text style={{fontSize: 12, color: '#fff', marginTop: 5}}>#175-185CM #窈窕</Text>
                        </View>
                    </View>
                    {this.renderDrawItems()}
                    {/*<DrawerItems {...this.props} />*/}
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    activeItem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    inactiveItem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

/*-----Redux Part-----*/
DrawMenuComponent.propTypes = propTypes;

export default DrawMenuComponent;

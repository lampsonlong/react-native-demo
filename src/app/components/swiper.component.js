import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, Platform, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const propTypes = {
    swiperList: PropTypes.array.isRequired,
};

class SwiperComponent extends Component {
    /*-----Data Part-----*/
    state = {
        index: 0,
    };
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/
    onIndexChanged = (index) => {
        // console.log(index);
        this.setState({
            index,
        });
    };

    renderCustomPagination = () => {
        console.log('renderCustomPagination', this.props.swiperList);
        const renderElements = [];
        this.props.swiperList.forEach((data, index) => {
            const element = (
                <View key={data.id} style={index === this.state.index ? styles.activePagination : styles.inactivePagination} />
            );
            renderElements.push(element);
        });

        return (
            <View style={{flexDirection: 'row'}}>
                {renderElements}
            </View>
        );
    };

    renderSwiperList = () => {
        const renderElements = [];
        this.props.swiperList.forEach((data) => {
            let tagsText = '';
            data.tags.forEach((tag) => {
                tagsText += '#' + tag + '  ';
            });

            const element = (
                <View key={data.id} style={styles.slide}>
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
                        style={styles.lgMask}
                    />
                    <Image
                        source={{uri: data.coverImageUrl}}
                        style={styles.coverImage}
                    />
                    <Text style={[styles.text, {zIndex: 2}]}>{data.storyContext}<Text style={styles.tagText}>{tagsText}</Text></Text>
                </View>
            );
            renderElements.push(element);
        });

        return (
            renderElements
        );
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        // 显示模态框
        return (
            <View>
                <View style={styles.updateTime}>
                    <Text>{this.props.swiperList[this.state.index].createTime}</Text>
                </View>
                <View style={styles.pagination}>
                    {this.renderCustomPagination()}
                </View>
                <Swiper
                    style={styles.wrapper}
                    showsPagination={false}
                    loop={false}
                    onIndexChanged={e => this.onIndexChanged(e)}
                >
                    {this.renderSwiperList()}
                </Swiper>
            </View>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    wrapper: {},
    updateTime: {
        paddingLeft: 20,
    },
    pagination: {
        paddingLeft: 20,
    },
    inactivePagination: {
        width: 10,
        height: 3,
        borderRadius: 1,
        backgroundColor: '#D3D6DB',
        marginRight: 10,
        marginVertical: 10,
    },
    activePagination: {
        width: 20,
        height: 3,
        borderRadius: 1,
        backgroundColor: '#0A1F3B',
        marginRight: 10,
        marginVertical: 10,
    },
    slide: {
        marginTop: 10,
        marginHorizontal: 20,
        height: 420,
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOpacity: 0.16,
                shadowRadius: 3,
                shadowOffset: {
                    height: 3,
                    width: 2,
                }
            },
            android: {
                elevation: 2
            },
        }),
    },
    text: {
        position: 'absolute',
        bottom: 0,
        color: '#F5F6F8',
        fontSize: 12,
        paddingBottom: 20,
        paddingHorizontal: 20,
        lineHeight: 20,
    },
    tagText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    coverImage: {
        height: '100%',
        borderRadius: 12,

    },
    lgMask: {
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        borderRadius: 12,
    }
});

/*-----Redux Part-----*/
SwiperComponent.propTypes = propTypes;

export default SwiperComponent;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, View, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * tips-bar组件
 *
 * 说明：title为显示文字。
 *      countDown为倒计时（单位：秒），倒计时结束后显示title。
 *      若countDown设置为0，则不显示倒计时，直接显示title。
 */
const propTypes = {
    title: PropTypes.string.isRequired,
    countDown: PropTypes.number,

};

class TipsBarComponent extends Component {
    /*-----Data Part-----*/
    state = {
        count: this.props.countDown, // 倒计时（秒）
        isCountDown: false, // 是否处于倒计时状态
        time: {
            sec: 0, // 倒计时显示：秒
            min: 0, // 倒计时显示：分
            hour: 0, // 倒计时显示：小时
        }
    };

    // 定时器
    timer = null;
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    componentDidMount() {
        this.countDown();
    }
    /*-----Methods Part-----*/
    countDown = () => {
        if (this.state.count > 0) {
            let count = this.state.count;

            // 计算倒计时的时分秒
            let hour = Math.floor(count / 60 / 60);
            if (hour < 10) {
                hour = '0' + hour;
            }

            let min = Math.floor(count / 60) % 60;
            if (min < 10) {
                min = '0' + min;
            }

            let sec = count % 60;
            if (sec < 10) {
                sec = '0' + sec;
            }

            count = this.state.count - 1;

            this.setState({
                count: count,
                isCountDown: true,
                time: {
                    sec,
                    min,
                    hour,
                }
            });

            this.timer = setTimeout(() => {
                this.countDown();
            }, 1000);
        } else {
            clearTimeout(this.timer);
            this.setState({
                isCountDown: false,
            });
        }
    };
    /*-----Render Part-----*/
    /**
     * 页面渲染
     * @returns {*}
     */
    render() {
        const {title} = this.props;
        // 显示模态框
        return (
            <View style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1530FF', '#7745FF']} style={styles.lgContainer}>
                    <View>
                        {this.state.isCountDown ?
                            <View style={{flexDirection: 'row', marginVertical: 8, justifyContent: 'center'}}>
                                <Text style={styles.context}>倒计时：</Text>
                                <View style={styles.countNumberContainer}>
                                    <Text style={styles.context}>{this.state.time.hour}</Text>
                                </View>
                                <Text style={styles.context}>&nbsp;:&nbsp;</Text>
                                <View style={styles.countNumberContainer}>
                                    <Text style={styles.context}>{this.state.time.min}</Text>
                                </View>
                                <Text style={styles.context}>&nbsp;:&nbsp;</Text>
                                <View style={styles.countNumberContainer}>
                                    <Text style={styles.context}>{this.state.time.sec}</Text>
                                </View>
                            </View>
                            :
                            <View style={{flexDirection: 'row', marginVertical: 8, justifyContent: 'center'}}>
                                <Text style={styles.context}>{title}</Text>
                            </View>
                        }
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

/*-----Style Part-----*/
const styles = StyleSheet.create({
    container: {
        width: 344,
        height: 44,
        borderRadius: 5,
        ...Platform.select({
            ios: {
                shadowColor: '#C9C3FF',
                shadowOpacity: 1,
                shadowRadius: 30,
                shadowOffset: {
                    height: 4,
                    width: 0,
                }
            },
            android: {
                elevation: 2
            },
        }),
    },
    lgContainer: {
        width: 344,
        height: 44,
        borderRadius: 5,
    },
    countNumberContainer: {
        width: 24,
        height: 28,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 2,
    },
    context: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 28,
        textAlign: 'center',
    },
});

/*-----Redux Part-----*/
TipsBarComponent.propTypes = propTypes;

export default TipsBarComponent;

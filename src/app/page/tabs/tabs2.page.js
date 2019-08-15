import {connect} from 'react-redux';
import React from 'react';
import {View, Text} from 'react-native';
import LongButtonComponent from "../../components/long-button.component";
import SwiperComponent from "../../components/swiper.component";

class Tabs2Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs2 Page';

    swiperList = [{
        id: '1',
        createTime: '2019年8月15日 20:12:44',
        coverImageUrl: 'https://wx2.sinaimg.cn/mw690/70e7204agy1g5yx1d1offj20u00u0grm.jpg',
        storyContext: '1模糊相识的脸，未来让我们越来越觉得孤独。直到有一天你寻找失落的记忆，才发现记忆中的人是那么的熟悉。模糊相识的脸，未来让我们越来越觉得孤独。直到有一天你寻找失落的记忆，才发现记忆中的人是那么的熟悉。',
        tags: ['自拍', '美颜相机'],
    }, {
        id: '2',
        createTime: '2019年8月14日 17:51:22',
        coverImageUrl: 'https://wx1.sinaimg.cn/mw690/70e7204agy1g5yx1cyvk8j20e60iwgnp.jpg',
        storyContext: '',
        tags: ['游戏', '保鲜膜', '美颜相机'],
    }, {
        id: '3',
        createTime: '2019年7月31日 14:01:39',
        coverImageUrl: 'https://wx3.sinaimg.cn/mw690/70e7204agy1g5yx1cz9opj20e60iwgnb.jpg',
        storyContext: '3模糊相识的脸，未来让我们越来越觉得孤独。直到有一天你寻找失落的记忆，才发现记忆中的人是那么的熟悉。模糊相识的脸，未来让我们越来越觉得孤独。直到有一天你寻找失落的记忆，才发现记忆中的人是那么的熟悉。',
        tags: ['2D', '咖啡厅', '日本'],
    }];
    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>

                <View style={{height: 500}}>
                    <SwiperComponent
                        swiperList={this.swiperList}
                    />
                </View>
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(Tabs2Page);

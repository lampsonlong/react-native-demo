import {connect} from 'react-redux';
import React from 'react';
import {View} from 'react-native';
import {List, WingBlank} from '@ant-design/react-native';
import I18n from '../../util/i18n.util';

class SettingsPage extends React.Component {
    render() {
        return (
            <View>
                <WingBlank>
                    <List>
                        <List.Item arrow="horizontal" onPress={() => this.props.navigation.navigate('SwitchLanguage')}>
                            {I18n.t('settings.switchLanguage')}
                        </List.Item>
                    </List>
                </WingBlank>
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    const { language } = state;
    return {
        language
    };
};

export default connect(mapStateToProps, null)(SettingsPage);

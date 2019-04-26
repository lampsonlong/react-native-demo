import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React from 'react';
import {View} from 'react-native';
import {List, WingBlank, Radio} from '@ant-design/react-native';
import * as languageAction from '../../actions/language.actions';

const propTypes = {
    languageActions: PropTypes.object,
};

class SwitchLanguagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: '',
        };
    }

    /*-----Lifecycle Part-----*/
    componentWillMount() {
        const {language} = this.props;
        console.log(language);
        this.setState({
            lang: language.lang
        });
    }

    componentDidMount() {

    }

    render() {
        const {languageActions} = this.props;
        return (
            <View>
                <WingBlank>
                    <List>
                        <List.Item>
                            <Radio
                                checked={this.state.lang === 'zh'}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        this.setState({lang: 'zh'});
                                        languageActions.switchLanguage('zh');
                                    }
                                }}
                            >
                                中文
                            </Radio>
                        </List.Item>
                        <List.Item>
                            <Radio
                                checked={this.state.lang === 'en'}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        this.setState({lang: 'en'});
                                        languageActions.switchLanguage('en');
                                    }
                                }}
                            >
                                English
                            </Radio>
                        </List.Item>
                    </List>
                </WingBlank>
            </View>
        );
    }
}

SwitchLanguagePage.propTypes = propTypes;

const mapStateToProps = (state) => {
    const {language} = state;
    return {
        language
    };
};

const mapDispatchToProps = (dispatch) => {
    const languageActions = bindActionCreators(languageAction, dispatch);
    return {
        languageActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchLanguagePage);

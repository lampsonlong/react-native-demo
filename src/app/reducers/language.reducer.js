import I18n from '../util/i18n.util';

const initialState = {
    lang: 'en',
};

export default function language(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            // 更新i18n
            const {lang} = action;
            // 切换语言
            I18n.setLanguage(lang);

            return {
                ...state,
                lang
            };
        default:
            return state;
    }
}

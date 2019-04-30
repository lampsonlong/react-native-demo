import I18n from 'react-native-i18n';
import zh from '../../asset/i18n/zh';
import en from '../../asset/i18n/en';

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh
};

I18n.setLanguage = (lang) => {
    const preLang = I18n.locale;
    // 切换语言
    I18n.locale = lang;
    console.log('切换语言：' + preLang + ' => ' + lang);
};

export default I18n;

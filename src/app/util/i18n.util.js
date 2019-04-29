import store from 'react-native-simple-store';
import I18n from 'react-native-i18n';
import zh from '../../asset/i18n/zh';
import en from '../../asset/i18n/en';

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh
};

console.log('I18n.locale:', I18n.locale);

I18n.setLanguage = (lang) => {
    // 本地存储
    store.save('lang', lang);
    // 切换语言
    I18n.locale = lang;
};

export default I18n;

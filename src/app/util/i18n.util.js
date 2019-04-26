import I18n from 'react-native-i18n';
import zh from '../../asset/i18n/zh';
import en from '../../asset/i18n/en';
import store from 'react-native-simple-store';

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh
};

// store.get('lang').then((lang) => {
//     I18n.locale = lang;
// });

console.log('I18n.locale:', I18n.locale);

I18n.setLanguage = (lang) => {
    I18n.locale = lang;
};

export default I18n;

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// ↓↓↓↓↓↓↓↓↓↓↓↓debug网络请求用↓↓↓↓↓↓↓↓↓↓↓↓
global.XMLHttpRequest = global.originalXMLHttpRequest ? global.originalXMLHttpRequest : global.XMLHttpRequest;
global.FormData = global.originalFormData ? global.originalFormData : global.FormData;

fetch
// Ensure to get the lazy property
if (window.__FETCH_SUPPORT__) {
    // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
} else {
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
    global.FileReader = global.originalFileReader ? global.originalFileReader : global.FileReader;
}
// ↑↑↑↑↑↑↑↑↑↑↑debug网络请求用↑↑↑↑↑↑↑↑↑↑↑

import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import global from './global.reducer';

// 配置本地缓存
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['global'] // 缓存全局
};

/**
 * 将所有的redux处理逻辑包装在一起
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    global
});

// 统一导出
export default persistReducer(persistConfig, rootReducer);

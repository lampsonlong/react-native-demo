import { combineReducers } from 'redux';
import global from './global.reducer';

/**
 * 将所有的redux处理逻辑包装在一起
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    global
});

// 统一导出
export default rootReducer;

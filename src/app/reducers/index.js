import { combineReducers } from 'redux';
import loginIn from './login.reducer';
import counter from './counter.reducer';
import language from './language.reducer';

/**
 * 将所有的redux处理逻辑包装在一起
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    loginIn,
    counter,
    language,
});

// 统一导出
export default rootReducer;

'use strict';
import { combineReducers } from 'redux';
import loginIn from './login.reducer'; // 导入登录的redux处理过程
import counter from './counter.reducer';

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    loginIn,
    counter,
});
export default rootReducer; // 导出,作为统一入口

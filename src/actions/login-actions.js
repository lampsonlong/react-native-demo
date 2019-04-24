import * as types from '../constants/login-types';// 导入事件类型,用来做分配给各个事件

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
    return {
        type: types.LOGIN_IN_REQUEST
    };
}

export function isLogining() {
    return {
        type: types.LOGIN_IN_DOING,
    };
}

export function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        user,
    };
}

export function loginError() {
    return {
        type: types.LOGIN_IN_ERROR,
    };
}

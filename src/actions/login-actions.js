import * as types from '../constants/login-types';// 导入事件类型,用来做分配给各个事件

// 模拟用户信息
const initUser = {
    name: 'testUser',
    age: 24,
};

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
    console.log('登录方法');
    alert('login()');
    return (dispatch) => {
        dispatch(isLogining()); // 正在执行登录请求

        // 模拟用户登录
        const result = fetch('https://www.baidu.com/')
            .then((res) => {
                dispatch(loginSuccess(true, initUser)); // 登录请求完成
            }).catch((e) => {
                dispatch(loginError(false)); // 登录请求出错
            });
    };
}

function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    };
}

function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        user,
    };
}

function loginError() {
    return {
        type: types.LOGIN_IN_ERROR,
    };
}

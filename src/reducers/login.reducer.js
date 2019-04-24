import * as types from '../constants/login-types'; // 导入事件类别,用来做事件类别的判断
// 初始状态
const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null,
    loginBtnLoading: false,
};

// 不同类别的事件使用switch对应处理过程
export default function loginIn(state = initialState, action) {
    let newState = {};

    switch (action.type) {
        case types.LOGIN_IN_DOING:
            newState = {
                status: '正在登陆',
                isSuccess: false,
                user: null,
                loginBtnLoading: true,
            };

            // 覆盖state
            return {
                ...state,
                ...newState,
            };
        case types.LOGIN_IN_DONE:
            newState = {
                status: '登陆成功',
                isSuccess: true,
                user: action.user,
                loginBtnLoading: false,
            };

            // 覆盖state
            return {
                ...state,
                ...newState,
            };
        case types.LOGIN_IN_ERROR:
            newState = {
                status: '登录出错',
                isSuccess: true,
                user: null,
                loginBtnLoading: false,
            };

            // 覆盖state
            return {
                ...state,
                ...newState,
            };
        default:
            return state;
    }
}

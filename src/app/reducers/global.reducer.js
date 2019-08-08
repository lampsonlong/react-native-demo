import * as types from '../const/global-type.const';

// 初始化状态
const initialState = {
    loginInfo: {
        ak: null,
    },
    userInfo: {
        id: 0,
        nickName: '',
        phone: '',
    },
    isLogin: false,
    topMessage: null,
    isShowTopMessage: false,
};

/**
 * 全局数据reducer
 * @param state
 * @param action
 * @returns {{loginInfo: {ak: null}, userInfo: {id: number, nickName: string, phone: string}, isLogin: boolean}}
 */
export default function global(state = initialState, action) {
    switch (action.type) {
        case types.SET_LOGIN_INFO:
            const loginInfo = action.loginInfo;
            return {
                ...state,
                loginInfo,
                isLogin: true,
            };
        case types.CLEAR_LOGIN_INFO:
            return {
                ...state,
                loginInfo: initialState.loginInfo,
                isLogin: false,
            };
        case types.GET_USER_INFO:
            return state;
        case types.SET_USER_INFO:
            let userInfo = action.userInfo;
            if (!userInfo) {
                userInfo = initialState.userInfo;
            }

            return {
                ...state,
                userInfo,
            };
        case types.CLEAR_USER_INFO:
            return {
                ...state,
                userInfo: initialState.userInfo,
            };
        case types.SET_TOP_MESSAGE:

            return {
                ...state,
                topMessage: action.topMessage,
                isShowTopMessage: true,
            };
        case types.CLEAR_TOP_MESSAGE:
            return {
                ...state,
                isShowTopMessage: false,
            };
        default:
            return state;
    }
}

import * as types from '../const/global-type.const';

/**
 * 登录后的全局数据设置
 * @returns {{type: string, params: *}}
 */
export function setLoginInfo(loginInfo) {
    return {
        type: types.SET_LOGIN_INFO,
        loginInfo,
    };
}

/**
 * 删除登录的全局数据
 * @returns {{type: string, params: *}}
 */
export function clearLoginInfo() {
    return {
        type: types.CLEAR_LOGIN_INFO,
    };
}

/**
 * 获取个人信息的全局数据
 * @returns {{type: string}}
 */
export function getUserInfo(userInfo) {
    return {
        type: types.GET_USER_INFO,
        userInfo,
    };
}


/**
 * 个人信息的全局数据设置
 * @returns {{type: string}}
 */
export function setUserInfo(userInfo) {
    return {
        type: types.SET_USER_INFO,
        userInfo,
    };
}
/**
 * 获取版本信息的全局数据
 * @returns {{type: string}}
 */
export function getVersionInfo(versionInfo) {
    return {
        type: types.GET_VERSION_INFO,
        versionInfo,
    };
}


/**
 * 版本信息的全局数据设置
 * @returns {{type: string}}
 */
export function setVersionInfo(versionInfo) {
    return {
        type: types.SET_VERSION_INFO,
        versionInfo,
    };
}
/**
 * 获取系统信息的全局数据
 * @returns {{type: string}}
 */
export function getSystemInfo(systemInfo) {
    return {
        type: types.GET_SYSTEM_INFO,
        systemInfo,
    };
}
/**
 * 系统信息的全局数据
 * @returns {{type: string}}
 */
export function setSystemInfo(systemInfo) {
    return {
        type: types.SET_SYSTEM_INFO,
        systemInfo
    };
}

/**
 * 删除个人信息的全局数据
 * @returns {{type: string}}
 */
export function clearUserInfo(userInfo) {
    return {
        type: types.CLEAR_USER_INFO,
        userInfo,
    };
}

export function setTopMessage(topMessage) {
    return {
        type: types.SET_TOP_MESSAGE,
        topMessage,
    };
}

export function setTopErrorMessage(topMessage) {
    return {
        type: types.SET_TOP_ERROR_MESSAGE,
        topMessage,
    };
}

export function clearTopMessage() {
    return {
        type: types.CLEAR_TOP_MESSAGE,
    };
}

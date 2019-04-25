import { put, take, call, fork } from 'redux-saga/effects';
import RequestUtil from '../utils/request-util';
import {isLogining, loginSuccess, loginError} from '../actions/login-actions';
import * as types from '../constants/login-types';

export function* login(params) {
    console.log('login request...', params);
    yield put(isLogining());
    const res = yield call(RequestUtil.get, 'http://dev-cex-api.dcex.world/spot/user/dictionary/marketList', params);
    console.log('login response... ', res);

    if (res && res.code === '0') {
        yield put(loginSuccess());
    } else {
        yield put(loginError());
    }
}

export function* watchLogin() {
    while (true) {
        const {params} = yield take(types.LOGIN_IN_REQUEST);
        yield fork(login, params);
    }
}

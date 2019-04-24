import { put, take, call, fork } from 'redux-saga/effects';
import RequestUtil from '../utils/request-util';
import {isLogining, loginSuccess, loginError} from '../actions/login-actions';
import * as types from '../constants/login-types';

export function* login() {
    console.log('login request...');
    yield put(isLogining());

    const res = yield call(RequestUtil.request, 'http://dev-cex-api.dcex.world//spot/user/dictionary/marketList', 'get');
    console.log('login response... ', res);

    if (res && res.code === '0') {
        yield put(loginSuccess());
    } else {
        yield put(loginError());
    }
}

export function* watchLogin() {
    while (true) {
        yield take(types.LOGIN_IN_REQUEST);
        yield fork(login);
    }
}

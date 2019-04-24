import { all, fork } from 'redux-saga/effects';

import {watchLogin} from './login.sagas';

export default function* rootSaga() {
    yield all([fork(watchLogin)]);
}

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END } from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import I18n from '../util/i18n.util';

const middlewares = [];

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const applyMiddlewares = applyMiddleware(...middlewares);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default async function configureStore(onComplete) {
    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddlewares)
    );

    // 读取本地缓存
    persistStore(store, {}, () => {
        // 读取完毕
        console.log('persistStore callback', store.getState());
        // 初始化语言
        const lang = store.getState().language.lang;
        I18n.setLanguage(lang);
        console.log('初始化语言：' + lang);

        // 初始化完毕（回调）
        onComplete();
    });

    // 启动saga
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}

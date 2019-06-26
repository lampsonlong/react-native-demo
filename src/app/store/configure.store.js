import { persistStore } from 'redux-persist';
import store from './store';

export default async function configureStore(onComplete, initialState) {
    // 读取本地缓存
    persistStore(store, {}, () => {
        // 初始化状态机
        initialState(store);

        // 初始化完毕（回调）
        onComplete();
    });

    return store;
}

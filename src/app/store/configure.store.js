import store from 'react-native-simple-store';
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

export default async function configureStore(initialState) {
    // TODO 待优化
    const testAsync = await store.get('lang');
    I18n.setLanguage(testAsync);
    console.log(testAsync);
    const store1 = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddlewares)
    );

    // install saga run
    store1.runSaga = sagaMiddleware.run;
    store1.close = () => store1.dispatch(END);

    return store1;
}

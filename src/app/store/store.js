import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import persistReducer from '../reducers';

const middlewares = [];

// // 自定义中间件
// const doNothingMidddleware = (store) => next => action => {
//     return next(action);
// };
//
// middlewares.push(doNothingMidddleware);

const applyMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddlewares)
);

export default store;

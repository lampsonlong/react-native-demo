import * as types from '../const/counter-types';

export function decrement() {
    return {
        type: types.DECREMENT,
    };
}

export function increment() {
    return {
        type: types.INCREMENT,
    };
}

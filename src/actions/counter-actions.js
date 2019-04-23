import * as types from '../constants/counter-types';

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

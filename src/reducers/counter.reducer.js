import * as types from '../constants/counter-types';

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREMENT:
      // 撰写逻辑：最小为0
      if (state.count > 0) {
          return {
              ...state,
              count: state.count - 1,
          };
      } else {
          return {
              ...state,
              count: 0,
          };
      }
    default:
      return state;
  }
}

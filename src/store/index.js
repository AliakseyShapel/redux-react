import { legacy_createStore } from 'redux';

function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === 'DECREMENT') {
    return { ...state, counter: state.counter - action.value };
  }
  if (action.type === 'TOGGLE') {
    return { ...state, showCounter: !state.showCounter };
  }
  return { counter: 0, showCounter: true };
}

const store = legacy_createStore(counterReducer);

export default store;

import { legacy_createStore } from 'redux';

function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + action.value };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - action.value };
  }
  return { counter: 0 };
}

const store = legacy_createStore(counterReducer);

export default store;

import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  function incrementHandler(value) {
    dispatch({ type: 'INCREMENT', value: value });
  }
  function decrementHandler(value) {
    dispatch({ type: 'DECREMENT', value: value });
  }
  function toggleCounterHandler() {
    dispatch({ type: 'TOGGLE' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
        <button onClick={incrementHandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementHandler.bind(null, 1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from 'common/src/todoSlice';
function App() {

  const count = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>{count.map(cnt => cnt)}</div>
      <button onClick={() => dispatch(increment('test'))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { increment, decrement, incrementOne, decrementOne } from "./actions/actions";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  // style
  const style = {
    display: 'inline',
    margin: '20px'
  }

  return (
    <div className="App m-5">

      {/* with payload */}
      <button onClick={() => dispatch(decrementOne())}>-1</button>
      {/* without paylod */}
      <button style={style} onClick={() => dispatch(decrement(5))}>-5</button>

      <h2 style={style}>Counter {counter}</h2>

      <button style={style} onClick={() => dispatch(increment(5))}>+5</button>

      <button onClick={() => dispatch(incrementOne())}>+1</button>


      <h2>isLogged {isLogged}</h2>

      {
        isLogged ? <h3>Information if logged</h3> : ''
      }
    </div>
  );
}

export default App;

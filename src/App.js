import React from 'react';
import './App.css';
import {increament,decreament} from './actions';
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
console.log('sdf');

return (
      <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>dispatch(increament())}>+</button>
        <button onClick={()=>dispatch(decreament())}>-</button>
        {isLogged && <h3>Valuable Info not to be displayed.</h3>}
      </div>
  );
}

export default App;

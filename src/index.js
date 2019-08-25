import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//store -> Globalized State

//ACTION -> INCREAMENT
const increament = () => {
    return {
        type:'INCREAMENT'
    }
}

const decreament = ()=> {
    return{
        type:'DECREAMENT'
    }
}


//REDUCER 
const counter = (state=0,action) => {
    switch(action.type){
        case 'INCREAMENT':
            return state+1;
        case 'DECREAMENT':
            return state-1;
        default:
            return state;    
    }
}
const store = createStore(counter);

store.subscribe(()=>console.log(store.getState()));
//DISPATCH

store.dispatch(increament());
store.dispatch(decreament());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

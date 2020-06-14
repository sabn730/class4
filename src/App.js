import React, { useState } from 'react';
import { Message } from './message.js'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

    //count = 1;   //Cannot be updated like this
  //setCount(2)


  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>

    </div>
  );
}



// class AppClass extends React.Component{             //old way
//   this.state = {}
//   constructor
  
//   componentDidMount
  
//   render
// }


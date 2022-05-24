import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

console.log(useState)
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }
  function handleReset() {
    setNum(0)
    setSum(0);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <button onClick={handleReset}>Reset</button>
  <p> Sum is {sum} </p>
  </form>;
}
function RestForm() {
  const [res, setRest] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }
  function handleReset() {
    setNum(0)
    setRest(0);
  }

  function handleSubmit(e) {
    setRest(res - Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Rest" />
  <button onClick={handleReset}>Reset</button>
  <p> Rest is {res} </p>
  </form>;
}
const rest = <RestForm/>
const el = <AddForm />; 
ReactDOM.render(
  (el,rest), 
  document.getElementById('root')
);
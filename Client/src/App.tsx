import React, {useState,useEffect} from "react";

function App(){
  const [ operator, setOperator ] = useState('add');
  const [ input1, setinput1 ] = useState(0);
  const [ input2, setinput2 ] = useState(0);
  
  const [ result, setResult ] = useState(0);

  function Calculate(op:string,x:number,y:number){
    switch (op) {
      case 'add':
        Add(x,y);
        break;
      case 'sub':
        Sub(x,y);
        break;
      case 'mul':
        Mul(x,y);
        break;
      case 'div':
        Div(x,y);
        break;
    }
  }

  function Add(x:number,y:number){
    
    const data = {a: x,b: y}
    fetch('http://localhost:3000/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(response => response.json())
    .then(data => {
      setResult(data.result);
    }).catch(err => {
      console.error(err);
    });
  }

  function Sub(x:number,y:number){
    
    const data = {a: x,b: y}
    fetch('http://localhost:3000/sub',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(response => response.json())
    .then(data => {
      setResult(data.result);
    }).catch(err => {
      console.error(err);
    });
  }

  function Mul(x:number,y:number){
    
    const data = {a: x,b: y}
    fetch('http://localhost:3000/mul',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(response => response.json())
    .then(data => {
      setResult(data.result);
    }).catch(err => {
      console.error(err);
    });
  }

  function Div(x:number,y:number){
    
    const data = {a: x,b: y}
    fetch('http://localhost:3000/div',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(response => response.json())
    .then(data => {
      setResult(data.result);
    }).catch(err => {
      console.error(err);
    });
  }

  return (
    <div>
      <h1>Write Some Numbers</h1>
      <input type="number" onChange={(e)=>{
        setinput1(parseInt(e.target.value));
      }} value={input1}/>
      <select id="" onChange={(e)=>{setOperator(e.target.value)}}>
        <option value="add">Additon</option>
        <option value="sub">Subtraction</option>
        <option value="mul">Multiplication</option>
        <option value="div">Division</option>
      </select>
      <input type="number" onChange={(e)=>{
        setinput2(parseInt(e.target.value));
      }} value={input2}/>
      <button onClick={()=>{
        Calculate(operator,input1,input2);
      }}>Calculate</button>
      <h1>Result: {result}</h1>
    </div>
  )
}

export default App;
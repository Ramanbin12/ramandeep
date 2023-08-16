import React,{useState} from 'react'

function Counter() {
let[count,setCount]=useState(0);
const inCount=()=>{
    setCount(count+1);
}
const decCount=()=>{
    setCount(count-1);
}
let time=new Date().toLocaleTimeString()
const[currTime,setCurrTime]=useState(time);
const updateTime=()=>{
    time=new Date().toLocaleTimeString()
    setCurrTime(time)
}
  return (
    <>
      <h2>count-{count}</h2>
      <button onClick={inCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
     <h3>Time:- {currTime}</h3>
     <button onClick={updateTime}>Get Time</button>

    </>
  )
}

export default Counter

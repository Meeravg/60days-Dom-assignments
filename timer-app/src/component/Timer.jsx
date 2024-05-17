import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const[count, setCount]=React.useState(0)
    const[isRunning, setIsRunning]=React.useState(true)

    useEffect(()=>{
        let id = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000);

        return ()=>{
            console.log("cleaned up");
            clearInterval(id)
        }
    },[isRunning])

    function toggleFun(){
        setIsRunning((preVal)=>!preVal)
        setCount(0)
    }

  return (
    <div>
        <h1>Timer</h1>
        <button onClick={toggleFun}>{isRunning ? "UnMount" : "Mount"}</button>
        {isRunning && <h3>Count :- {count}</h3>}
    </div>
  )
}

export default Timer;
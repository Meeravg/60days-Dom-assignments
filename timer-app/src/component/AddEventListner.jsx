import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const AddEventListner = () => {

    const [mouseposition, setMouseposition] = React.useState({x:0, y:0});
    const[isRunning, setIsRunning]=React.useState(true)

    useEffect(()=>{
        const MouseMovement = (event)=>{
            setMouseposition({x: event.clientX, y: event.clientY})
        }

        document.addEventListener("mousemove", (event)=>{
            MouseMovement(event)
        });
        return()=>{
            console.log("cleaned up");
            document.removeEventListener("mousemove", MouseMovement)
        }
        
    },[])

    function toggleFun(){
        setIsRunning((preVal)=>!preVal)
       
    }

  return (
    <div>
        <h1>AddEventListner</h1>
        <button onClick={toggleFun}>{isRunning ? "UnMount" : "Mount"}</button>
      {isRunning && ( <h3>X: {mouseposition.x}, Y: {mouseposition.y}</h3>)}
        <button></button>
    </div>
  )
}

export default AddEventListner
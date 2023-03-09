import React from 'react'
import { useDispatch } from 'react-redux'
import { chPath } from '../Slice/Theme'

function Start() {
  const dispatch=useDispatch()
  return (
    <div className='Start' id='Start'>
        <h1 className='carga' style={{position:"relative",top:"40%", cursor:"pointer"}} onClick={()=>{
            console.log("sss")
            document.getElementById("Start").style.visibility = "hidden"
            dispatch(chPath())    
 
 }} >Start</h1>
    </div>
  )
}

export default Start

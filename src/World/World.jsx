import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Home } from '../Components/Home'
import { Room2 } from '../Components/Room2'



function World() {
  return (
    <>
        <OrbitControls/>        
        {/* <Home/> */}
        <Room2/>
    </>
  )
}

export default World
import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Home } from '../Components/Home'


function World() {
  return (
    <>
        <OrbitControls/>        
        <Home/>
    </>
  )
}

export default World
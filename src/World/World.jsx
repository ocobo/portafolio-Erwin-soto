import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Home } from '../Components/Home'


function World() {
  return (
    <>
        <OrbitControls/>
        {/* <Room/> */}
        <Home/>
    </>
  )
}

export default World
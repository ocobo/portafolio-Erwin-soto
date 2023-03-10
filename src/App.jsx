import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import {  Effects, OrbitControls } from '@react-three/drei'
import World from './World/World'
import { UnrealBloomPass } from 'three-stdlib'
import Lights from './World/Lights'
import { useDispatch, useSelector } from 'react-redux'
import { chMobile, chDesktop,chTablet } from './Slice/Theme';
extend({ UnrealBloomPass })
import * as THREE from "three";
import CameraControls from 'camera-controls'
import Loader from './Components/Loader'
import Start from './Components/Start'
CameraControls.install({ THREE })

function Controls({ About, Proyect, buzon,start , pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
  const dispatch=useDispatch()
 
  const camera = useThree((state) => state.camera)
  
  
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  return useFrame((state, delta) => {
  let sz=window.innerWidth
  let wz=window.innerHeight
  /* console.log("ancho",sz)
  console.log("alto",wz) */
  if(window.innerWidth>1150 ){
    dispatch(chDesktop())
    if(About){
      pos.set(-0.2, 1.7, 0.3+ 0.4)
      look.set(-30, 2, 1 - 0.5)

    }

    if(Proyect && About===false){
      pos.set(-1, 11.3, -1.8+0.4)
      look.set(-1, 11.3, -2-0.5)

    }

    if(buzon && About===false && Proyect===false){
      pos.set(-10, 12, 10)
      look.set(0, 4, 0)

    }

    if(start===true && About===false && Proyect===false && buzon===false){
      pos.set(8, 1.5, 11)
      look.set(1, 2, 0)
    }

    if( start===false && About===false && Proyect===false && buzon===false){
      pos.set(8, 1.5, 25)
      look.set(1, 2, 0)
    }
   /*  zoom ?  : 
    zoom ?  :  */

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
   
  }
  if((window.innerWidth<1150 && window.innerWidth >769)&& wz>430){
    dispatch(chTablet())
    //console.log("tablet")
   /*  zoom ? pos.set(7, 2,  -0+ 0.4) : pos.set(25, 9, 12)
    zoom ? look.set(4.3, -9.6, -1.83 - 0.5) : look.set(4, 2, 0) */
    if(About){
      pos.set(-0.2, 1.7,  0.5)
      look.set(-20, 1, 0)

    }
    if(Proyect && About===false){
      pos.set(-0.7, 11.3, -1.8+0.4)
      look.set(-0.7, 11.3, -2-0.5)

    }
    if(buzon && About===false && Proyect===false){
      //console.log("b")
      pos.set(-15, 10, 15)
      look.set(13, 5, 0)

    }

    if(start && buzon===false && About===false && Proyect===false){
      pos.set(9, 2.5, 12)
      look.set(0, 1, 0)

    }
    if(start==false && About===false && Proyect===false && buzon===false ){
      pos.set(30, 8, 15)
      look.set(6, 2, 0)
    }
    
    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
    
  }
  if(sz<768 && wz>430){
    dispatch(chMobile())
    
   //console.log("mobile2")
    
    if(About){
      //console.log("a")
      pos.set(0.5, 1.8, 0.63)
      look.set(-12, 1.5, 0)
    }

    if(Proyect && About===false){
      //console.log("p")
      pos.set(-0.9, 11, 1)
      look.set(-0.86, 11, 0)

    }

    if(buzon && About===false && Proyect===false){
      //console.log("b")
      pos.set(-15, 10, 15)
      look.set(13, 5, 0)

    }

    if(start==true && buzon===false && About===false && Proyect===false){
      //console.log("s")
      pos.set(9, 2.5, 13)
      look.set(4, 3, 0)

    }
    
    if(start===false && About===false && Proyect===false && buzon===false){
      //console.log("to")
      pos.set(9, 2.5,50)
      look.set(0, 3, 0)
    }

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
  }
  if(wz<429 && sz<920 ){
    dispatch(chMobile())
   //console.log("m")
    if(About){
      pos.set(4, 2.8, -1+ 0.4)
      look.set(3.1, 2.6, -1 - 0.5)
    }
    if(Proyect && About===false){
      pos.set(-1.78, 5.28, 1.63+0.4)
      look.set(-3.3, 5, 1.63-0.5)

    }
    if(buzon && About===false && Proyect===false){
      pos.set(-40.78, 5.28, 1.2+0.4)
      look.set(-43, 5, 0-0.5)

    }
    
    if(About===false && Proyect===false && buzon===false){
      pos.set(0, 0, 0)
      look.set(0, 2, 0)
    }

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
  } 

  })
}





function App() {
  const [carga,setCarga]=useState(false)
  const [count, setCount] = useState(0)
  const About=useSelector((state=>state.counter.cam))
  const Proyect=useSelector((state=>state.counter.travel))
  const buzon=useSelector((state=>state.counter.buzon))
  const loading=useSelector((state=>state.counter.loading))
  const path=useSelector((state=>state.counter.path))
  const mobile=useSelector((state=>state.counter.mobile))
 

  /* if(loading==false){
    return
  }
  else */
  return (
    <>
      <div className="App">
      {loading ? <Start/>: <Loader/>}
      </div>
     <Canvas shadows={false}   gl={{ antialias: true }} dpr={mobile? Math.min(3, window.devicePixelRatio) : window.devicePixelRatio}>
     <Lights/>
     
     <Controls About={About} Proyect={Proyect} buzon={buzon} start={path}/>
     <Effects disableGamma >
     <unrealBloomPass threshold={1} strength={0.25} radius={0.7} />
     </Effects>
      <World/>
      <OrbitControls/>
     </Canvas>
    </>
  )
}

export default App

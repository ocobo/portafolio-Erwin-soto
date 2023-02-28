import { Lightformer, SpotLight } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, {useRef, useEffect} from 'react'
import { Object3D } from 'three'

function Lights() {

    const spotLightRef = useRef();
  const spotLightTargetRef = useRef();
  const spotLightTargetRef2 = useRef();

useEffect(()=>{
  spotLightTargetRef.current.position.set(-1.6, 0, 2.1);
    spotLightTargetRef2.current.position.set(-2, -1, 5);

})

  useFrame((state) => {
    // Actualiza la posición del objeto target del SpotLight
    // para cambiar la dirección del haz de luz
    
  });
   
    
  return (
    <>
    <mesh ref={spotLightTargetRef} position={[0, 0, -1]}  />
    <mesh ref={spotLightTargetRef2} position={[0, 0, -1]} />
    <rectAreaLight position={[-1,0,-0.9]} color={"#ffdf00"}  width={2} height={11} intensity={2} />
   
    <rectAreaLight position={[0.3,8,-1.7]} color={"#ffdf00"}  width={2} height={3} intensity={2} />
    <rectAreaLight position={[-3,8,-1.5]} color={"#ffdf00"}  width={2} height={3} intensity={2} />
    <rectAreaLight position={[-3,8.7,1]} color={"#ffdf00"}  rotation={[-Math.PI/2,0,0]} width={2} height={3} intensity={2} />
     <rectAreaLight position={[2.5,1,-4.5]} rotation={[0,-Math.PI/2,0]}  width={1.5} height={3} intensity={2}/> 
     <rectAreaLight position={[2,5,-4.5]} rotation={[0,-Math.PI/2,0]}  width={1} height={3} intensity={2}/>   
     <rectAreaLight position={[-1.7,4,0.3]} rotation={[0,-Math.PI/2,0]}  width={2} height={3} intensity={2}/>
     <rectAreaLight position={[0.2,4,-2.4]} rotation={[0,-Math.PI,0]}  width={2.5} height={3} intensity={2}/>
    {/*  <rectAreaLight position={[-5.7,1,2.6]} rotation={[0,-Math.PI/2,Math.PI/2]}  width={3} height={6} intensity={5}/> */}   
     <rectAreaLight position={[0.2,0,-2.4]} rotation={[0,-Math.PI,0]}  width={2.5} height={3} intensity={2}/>
     <rectAreaLight position={[0.8,7,-2.4]} rotation={[0,-Math.PI,0]}  width={2.5} height={3} intensity={2}/>   
     <rectAreaLight position={[-4.1,7,-2.4]} rotation={[0,-Math.PI,0]}  width={2.5} height={3} intensity={2}/>      
     <rectAreaLight position={[0.5,1,-6.5]} rotation={[0,0,0]}  width={2.5} height={3} intensity={2}/> 
     <rectAreaLight position={[-4,1,-6.5]} rotation={[0,0,0]}  width={2} height={3} intensity={2}/>     
     <rectAreaLight position={[-5.9,1,-4.5]} rotation={[0,Math.PI/2,0]}  width={1.5} height={3} intensity={2}/> 
     <rectAreaLight position={[-5.9,1,-1.5]} rotation={[0,Math.PI/2,0]}  width={0.8} height={3} intensity={2}/> 
     <rectAreaLight position={[-5.9,1,1.3]} rotation={[0,Math.PI/2,0]}  width={0.8} height={3} intensity={2}/>
    {/*  <SpotLight
        ref={spotLightRef}
        position={[-1.6, 2, 2.3]}
        target={spotLightTargetRef.current}
        angle={1}
        intensity={0.1}
        penumbra={0.7}
        distance={1}
        color={"#ffdf00"}
        castShadow
      />
      <SpotLight
        ref={spotLightRef}
        position={[8.8, 0.4, 3.6]}
        target={spotLightTargetRef.current}
        angle={0.05}
        intensity={2}
        penumbra={0.7}
        distance={1}
        castShadow
      /> */}
      {/* <SpotLight  position={[0, 30, 0]} angle={15} distance={50} color={"#00aae4"} intensity={2}/> */}
      {/* <directionalLight  position={[12, 3, 0]} intensity={0.2} color={"#00aae4"}/> */}
      <ambientLight intensity={0.5}  color={"#3c688e"}/>
      <directionalLight  position={[-0, 9, -11]} intensity={0.1} color={"#00aae4"} castShadow/>
   

      {/* <rectAreaLight position={[9.6,1,7.6]} rotation={[0,Math.PI/2,0]}  width={0.8} height={0.7} intensity={2}/>
      <rectAreaLight position={[8,1,7.6]} rotation={[0,Math.PI/2,0]}  width={0.8} height={0.7} intensity={2}/> */}
      <rectAreaLight position={[8,4,7.2]} rotation={[0,Math.PI/2,0]}  width={1} height={6} intensity={5} color={"#00aae4"}/>
      <rectAreaLight position={[9.6,4,8]} rotation={[0,Math.PI/2,0]}  width={1} height={7} intensity={5} color={"#00aae4"}/>
      {/* <SpotLight  position={[15, 25, -15]} angle={15} distance={50} color={"#00aae4"} intensity={1}/>
      <SpotLight  position={[-15, 30, -10]} angle={15} distance={50} color={"#00aae4"} intensity={2}/> */}
      <pointLight position={[-5,2.6,4]} castShadow distance={10} intensity={0.7} color={"#ffdf00"}  />
     </>
  )
}

export default Lights
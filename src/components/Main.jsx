import {  OrbitControls, PerspectiveCamera,Box, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef,useMemo,useState } from "react";
import { angleToRadians } from "../utils/angletoRads";
import {Car} from "./Car";
import gsap from 'gsap'
import * as THREE from "three";

const Main = () => {
  const above = 3.4
  const ballRef = useRef(null)
  const dur = 2;
  useEffect(()=>{
    const timeline = gsap.timeline()
    // timeline.to(ballRef.current.position,{x:1.1,duration:1,ease:"power1.in"})
    // timeline.to(ballRef.current.position,{y:-9.1,x:4,duration:0.5},">")
    // timeline.to(ballRef.current.position,{y:-4,x:7,duration:0.5},">")
    // timeline.to(ballRef.current.position,{y:-9.1,duration:2,ease:"bounce"},">")
    // timeline.to(ballRef.current.position,{x:22,duration:4},"<")

    timeline.to(ballRef.current.position,{x:1.1,duration:1,ease:"power1.in",delay:1.1})
    timeline.to(ballRef.current.position,{y:-9.1,duration:dur,ease:"bounce"},">") // run after previos
    timeline.to(ballRef.current.position,{x:22,duration:dur+2},"<") // run with previous
  },[])
  return (
    <>
        <OrbitControls />
          <PerspectiveCamera makeDefault position={[0, 15, 55]}  />
        <group rotation={[0, -angleToRadians(30), 0]}>

            <mesh position={[-3,above - 0.9,0]} castShadow ref={ballRef}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#fa0505"  />
            </mesh>

            <Box args={[30,12,35]} position={[-15,-5.5,0]} receiveShadow>
            <meshStandardMaterial color="#1ea3d8" />
            </Box>
            <Box args={[55,6,35]} position={[0,-14,0]} receiveShadow>
            <meshStandardMaterial color="#1ea3d8" />
            </Box>

            <Car position={[-23,above,0]} castShadow/>

            <ambientLight args={["#ffffff",0.5]} />
            <directionalLight
              args={["#ffffff",0.25]}
              position={[0, 5, 15]}
              castShadow
              target-position={[-10, 0, 0]}
              />
        </group>
        </>
  )
}

export default Main
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { angleToRadians } from "../utils/angletoRads";

export function Car(props) {
  const { nodes, materials } = useGLTF("/models/lexus_rx300.glb");
  // tyre are mesh number 6,7,12
  const groupRef = useRef(null)
  const rotationRef = useRef(null)
  useEffect(()=>{
    const timeline = gsap.timeline()
    timeline.to(groupRef.current.position,{x:-12,duration:1.5,})
    //tyre animation
    // timeline.to(rotationRef.current.rotation,{
    //   duration: 10,z: Math.PI * 2, repeat: -1, ease: "none"})
    // console.log(rotationRef);
  },[])
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} castShadow receiveShadow>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.material_1}
          ref={rotationRef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_1}
          ref={rotationRef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.material_1}
          ref={rotationRef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/lexus_rx300.glb");

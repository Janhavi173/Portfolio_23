/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 simple_stylized_cartoon_style_calendar.gltf --transform
Author: Anggo Ari Wibowo (https://sketchfab.com/anggoariwibowo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-stylized-cartoon-style-calendar-d3f5e5763e2848359844a833cb7854ff
Title: Simple Stylized Cartoon Style Calendar
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/simple_stylized_cartoon_style_calendar-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./calendar.glb')

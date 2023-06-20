import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props) {
  const groupRef = useRef();
  const { nodes } = useGLTF('/anatomy-transformed.glb');
  useFrame(() => {
    groupRef.current.rotation.y += 0.02; // Adjust the rotation speed as desired
  });

  // Import the texture files
  const texturePath = '/textures/';
  const bodyTexture = useTexture(`${texturePath}Body_Low_SP_blinn1SG1_normal.jpeg`);
  const eyeTexture = useTexture(`${texturePath}material_baseColor.jpeg`);

  // Create the materials using the textures
  const bodyMaterial = new THREE.MeshStandardMaterial({ map: bodyTexture });
  const eyeMaterial = new THREE.MeshStandardMaterial({ map: eyeTexture });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Eye2_Eye_0.geometry} material={eyeMaterial} scale={0.01} />
      <mesh geometry={nodes.body_low__Body_Low_SP_blinn1SG1_0.geometry} material={bodyMaterial} scale={0.01} />
    </group>
  );
}

useGLTF.preload('/anatomy-transformed.glb');

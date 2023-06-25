import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/led-transformed.glb');

  // Animation variables
  const radius = 1; // Radius of the circular path
  const speed = 0.01; // Speed of the animation
  let angle = 0; // Initial angle

  // Update the position and rotation of the model
  useFrame((state, delta) => {
    angle += speed * delta; // Increment the angle based on the speed and delta time

    // Calculate the new position based on the angle and radius
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * radius;
    const z = angle * 0.01; // Adjust the height of the model based on the angle

    groupRef.current.position.set(x, y, z); // Update the position
    groupRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.initialShadingGroup} position={[0, 0, 0]} rotation={[-Math.PI / 0, 1, 0]} />
    </group>
  );
}

useGLTF.preload('/led-transformed.glb');

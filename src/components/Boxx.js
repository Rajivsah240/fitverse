import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;

    const init = () => {
      // Create a scene
      scene = new THREE.Scene();

      // Set up camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Load the OBJ model
      const loader = new OBJLoader();
      loader.load("c:/Users/heymohit/Desktop/git_clone/fitverse/src/assets/gymModell.obj", (object) => {
        scene.add(object);
      });

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Set up the animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    };

    init();

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default MyComponent;

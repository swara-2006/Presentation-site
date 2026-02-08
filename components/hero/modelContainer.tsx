"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

// Global reference for ScrollTrigger access
export let modelRef: THREE.Object3D | null = null;

export default function ModelContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1.0;

    containerRef.current.appendChild(renderer.domElement);

    // LIGHTS
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainLight.position.set(1, 2, 3);
    mainLight.castShadow = true;
    mainLight.shadow.bias = -0.001;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-2, 0, -2);
    scene.add(fillLight);

    // MODEL
    let modelSize: THREE.Vector3 | null = null;

    const setupModel = () => {
      if (!modelRef || !modelSize) return;
      const isMobile = window.innerWidth < 1000;
      const box = new THREE.Box3().setFromObject(modelRef);
      const center = box.getCenter(new THREE.Vector3());

      modelRef.position.set(
        isMobile
          ? center.x + modelSize.x * 1
          : center.x - modelSize.x * 0.4,
        -center.y + modelSize.y * 0.085,
        -center.z
      );

      modelRef.rotation.z = isMobile ? 0 : THREE.MathUtils.degToRad(-25);

      const cameraDistance = isMobile ? 2 : 1.25;

      camera.position.set(
        0,
        0,
        Math.max(modelSize.x, modelSize.y, modelSize.z) * cameraDistance
      );

      camera.lookAt(0, 0, 0);
    };

    const loader = new GLTFLoader();
    loader.load("/3d-model/shaker.glb", (gltf) => {
      modelRef = gltf.scene;

      modelRef.traverse((node) => {
        if ((node as THREE.Mesh).isMesh && (node as THREE.Mesh).material) {
          const mesh = node as THREE.Mesh;
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.metalness = 0.05;
          material.roughness = 0.9;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });

      const box = new THREE.Box3().setFromObject(modelRef);
      modelSize = box.getSize(new THREE.Vector3());

      scene.add(modelRef);
      setupModel();
    });

    // ANIMATION LOOP (no rotation - controlled by ScrollTrigger)
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      setupModel();
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      modelRef = null;

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="model-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-50 pointer-events-none"
    />
  );
}

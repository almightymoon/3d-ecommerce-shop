'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, Environment, ContactShadows, Sparkles, OrbitControls } from '@react-three/drei';
import styles from './HeroScene.module.css';

function HeroModel() {
  const { scene } = useGLTF('/models/multi-image-Adidas-shoe.glb');
  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1.2}>
      <primitive object={scene} scale={1.8} position={[0, -0.4, 0]} />
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className={styles.wrap}>
      <div className={styles.ring} aria-hidden />
      <div className={styles.ring2} aria-hidden />
      <Canvas camera={{ position: [0, 0.2, 3.8], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#e0f2fe" />
        <pointLight position={[-4, 2, -2]} intensity={0.8} color="#c084fc" />
        <Suspense fallback={null}>
          <HeroModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.55} scale={12} blur={2.8} far={4} />
          <Sparkles count={80} scale={[6, 4, 2]} size={2.5} speed={0.35} color="#22d3ee" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>
      <div className={styles.label}>Live WebGL Preview</div>
    </div>
  );
}

useGLTF.preload('/models/multi-image-Adidas-shoe.glb');

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls, Sparkles, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';

function Model({ url, onLoaded }: { url: string; onLoaded: () => void }) {
  const { scene } = useGLTF(url);
  useEffect(() => { if (scene) onLoaded(); }, [scene, onLoaded]);
  return <primitive object={scene} />;
}

function Loader({ previewImage }: { previewImage?: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }} className="skeleton">
      {previewImage && (
        <div style={{ position: 'relative', width: '70%', height: '70%', opacity: 0.35 }}>
          <Image src={previewImage} alt="Loading" fill style={{ objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
}

export default function ThreeViewer({ modelUrl, previewImage }: { modelUrl: string; previewImage?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'radial-gradient(circle at 40% 30%, rgba(34,211,238,0.1), transparent 55%), radial-gradient(circle at 70% 70%, rgba(192,132,252,0.12), transparent 50%), #0f172a',
      cursor: 'grab', position: 'relative', overflow: 'hidden',
    }}>
      {!isLoaded && <Loader previewImage={previewImage} />}
      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]} camera={{ fov: 42 }} gl={{ antialias: true, alpha: true }}
          style={{ position: 'absolute', inset: 0, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <PresentationControls speed={1.5} global zoom={0.6} polar={[-0.05, Math.PI / 4]}>
            <Stage environment="city" intensity={0.9} shadows="contact" adjustCamera={1.1}>
              <Model url={modelUrl} onLoaded={() => setIsLoaded(true)} />
            </Stage>
          </PresentationControls>
          <ContactShadows opacity={0.45} scale={10} blur={2.5} far={4} color="#000000" />
          <Sparkles count={40} scale={5} size={1.5} speed={0.3} color="#22d3ee" />
          <OrbitControls makeDefault autoRotate autoRotateSpeed={0.9} enablePan={false} />
        </Canvas>
      </Suspense>
    </div>
  );
}

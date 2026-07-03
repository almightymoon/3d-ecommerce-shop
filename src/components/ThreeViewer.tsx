'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';

function Model({ url, onLoaded }: { url: string; onLoaded: () => void }) {
    const { scene } = useGLTF(url);
    useEffect(() => {
        if (scene) {
            onLoaded();
        }
    }, [scene, onLoaded]);
    return <primitive object={scene} />;
}

function Loader({ previewImage }: { previewImage?: string }) {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            pointerEvents: 'none'
        }} className="skeleton">
            {previewImage && (
                <div style={{ position: 'relative', width: '80%', height: '80%', opacity: 0.5 }}>
                    <Image
                        src={previewImage}
                        alt="Loading..."
                        fill
                        style={{ objectFit: 'contain', filter: 'grayscale(100%)' }}
                    />
                </div>
            )}
        </div>
    );
}

export default function ThreeViewer({ modelUrl, previewImage }: { modelUrl: string; previewImage?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 30%, rgba(0,229,255,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.15) 0%, transparent 50%), linear-gradient(160deg, #0f1629 0%, #070b14 100%)',
            borderRadius: '16px',
            cursor: 'grab',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)'
        }}>
            {!isLoaded && <Loader previewImage={previewImage} />}
            <Suspense fallback={null}>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45 }}
                    gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
                    style={{ position: 'absolute', inset: 0, opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
                >
                    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment="night" intensity={0.8} shadows={false}>
                            <Model url={modelUrl} onLoaded={() => setIsLoaded(true)} />
                        </Stage>
                    </PresentationControls>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={1.2} />
                </Canvas>
            </Suspense>
        </div>
    );
}

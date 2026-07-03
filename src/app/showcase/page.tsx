'use client';

import { Player } from '@remotion/player';
import { Main } from '@/remotion/Main';
import styles from './showcase.module.css';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function ShowcasePage() {
  return (
    <main className="container">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}><MoveLeft size={18} /> Back to shop</Link>
          <h1 className={styles.title}>Cinematic product reel</h1>
          <p className={styles.subtitle}>Programmatic video powered by Remotion + Three.js</p>
        </div>
        <div className={styles.playerContainer}>
          <Player
            component={Main}
            durationInFrames={450}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            style={{ width: '100%', aspectRatio: '16/9' }}
            controls autoPlay loop
            acknowledgeRemotionLicense
          />
        </div>
        <div className={styles.infoCard}>
          <h3>Render-ready marketing asset</h3>
          <p>Export a broadcast-quality MP4 from the same 3D scene used in the shop — one command, no manual editing.</p>
          <div className={styles.command}>
            <code>npx remotion render src/remotion/Root.tsx ProductShowcase out.mp4</code>
          </div>
        </div>
      </div>
    </main>
  );
}

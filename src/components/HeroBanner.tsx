'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './HeroBanner.module.css';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className={styles.scenePlaceholder} />,
});

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.pill}><Sparkles size={14} /> Next-gen 3D commerce</div>
          <h1 className={styles.title}>
            The future of shopping is
            <span className={styles.gradient}> dimensional</span>
          </h1>
          <p className={styles.subtitle}>
            Inspect every product in photorealistic WebGL. Drag, rotate, and zoom before you buy — no app required.
          </p>
          <div className={styles.actions}>
            <Link href="/product/adidas-shoe" className="btn-primary">
              Shop featured drop <ArrowRight size={18} />
            </Link>
            <Link href="/showcase" className="btn-secondary">Watch cinematic reel</Link>
          </div>
          <dl className={styles.stats}>
            <div><dt>360</dt><dd>Orbit view</dd></div>
            <div><dt>GLB</dt><dd>Real models</dd></div>
            <div><dt>4K</dt><dd>Textures</dd></div>
          </dl>
        </div>
        <div className={styles.visual}><HeroScene /></div>
      </div>
    </section>
  );
}

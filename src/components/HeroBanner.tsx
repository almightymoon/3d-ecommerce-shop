import Link from "next/link";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowOrb} aria-hidden />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Immersive WebGL Storefront</p>
        <h1 className={styles.title}>
          Shop products in<span className={styles.highlight}> full 3D</span>
        </h1>
        <p className={styles.subtitle}>
          Rotate, zoom, and inspect every item before you buy. Powered by React Three Fiber and real GLB models.
        </p>
        <div className={styles.actions}>
          <Link href="/showcase" className="btn-primary">Launch 3D Showcase</Link>
          <Link href="#catalog" className="btn-secondary">Browse Catalog</Link>
        </div>
        <ul className={styles.stats}>
          <li><strong>360</strong><span>Orbit controls</span></li>
          <li><strong>GLB</strong><span>Real 3D assets</span></li>
          <li><strong>60fps</strong><span>WebGL optimized</span></li>
        </ul>
      </div>
    </section>
  );
}

import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ className, ...props }: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer className={`${styles.footer} ${className ?? ''}`} {...props}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.top}>
            <div>
              <p className={styles.brand}>NovaMart</p>
              <p className={styles.tagline}>Immersive 3D commerce built with Next.js, React Three Fiber, and real GLB assets.</p>
            </div>
            <div className={styles.links}>
              <Link href="/">Shop</Link>
              <Link href="/showcase">Showcase</Link>
              <Link href="https://github.com/almightymoon/3d-ecommerce-shop">GitHub</Link>
            </div>
          </div>
          <div className={styles.divider} />
          <p className={styles.copy}>© {new Date().getFullYear()} NovaMart · Crafted by <Link href="https://github.com/almightymoon">almightymoon</Link></p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import styles from './page.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const categories = ['All Items', 'Toys', 'Shoes', 'Home'];
  const filtered = activeCategory === 'All Items' ? products : products.filter(p => p.category === activeCategory);

  return (
    <main className="container">
      <HeroBanner />
      <TrustBar />
      <div id="catalog" className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Browse</p>
          <ul>
            {categories.map(cat => (
              <li key={cat} className={activeCategory === cat ? styles.active : ''} onClick={() => setActiveCategory(cat)}>{cat}</li>
            ))}
          </ul>
        </aside>
        <section>
          <header className={styles.header}>
            <div>
              <h2>Curated drops</h2>
              <p>Tap to enter the 3D viewer</p>
            </div>
            <Link href="/showcase" className={styles.showcaseLink}>Cinematic showcase <ArrowUpRight size={16} /></Link>
          </header>
          <div className={styles.grid}>
            {filtered.map(product => (
              <Link key={product.id} href={`/product/${product.id}`} className={styles.card}>
                <span className={styles.badge}><Box size={12} /> 3D</span>
                <div className={styles.imageWrap}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width:768px) 50vw, 33vw" style={{ objectFit: 'contain', padding: '1.25rem' }} />
                </div>
                <div className={styles.meta}>
                  <span className={styles.cat}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className={styles.price}><span>$</span>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

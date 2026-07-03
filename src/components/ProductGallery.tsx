"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThreeViewer from './ThreeViewer';
import ImageMagnifier from './ImageMagnifier';
import styles from '../app/product/[id]/product.module.css';
import { Product } from '@/data/products';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function ProductGallery({ product }: { product: Product }) {
  const [activeMedia, setActiveMedia] = useState<'3d' | number>('3d');

  const FeatureIcon = ({ name }: { name: string }) => {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    const Icon = icons[name];
    return Icon ? <Icon size={28} /> : <LucideIcons.Sparkles size={28} />;
  };

  return (
    <div className={styles.productContent}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Shop</Link> / <span>{product.name}</span>
      </nav>

      <div className={styles.thumbnails}>
        <div className={`${styles.thumbItem} ${activeMedia === '3d' ? styles.active : ''}`} onClick={() => setActiveMedia('3d')}>
          <Image src={product.image} alt="3D View" fill style={{ objectFit: 'cover' }} />
          <div className={styles.thumb3DLabel}>3D</div>
        </div>
        {product.images.map((img, index) => (
          <div key={index} className={`${styles.thumbItem} ${activeMedia === index ? styles.active : ''}`} onClick={() => setActiveMedia(index)}>
            <Image src={img} alt={`${product.name} ${index}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div className={styles.viewerColumn}>
        {activeMedia === '3d' ? (
          <ThreeViewer modelUrl={product.model} previewImage={product.image} />
        ) : (
          <ImageMagnifier src={product.images[activeMedia as number]} alt={product.name} />
        )}
        {activeMedia === '3d' && <p className={styles.viewerHint}>Drag to rotate · Scroll to zoom</p>}
      </div>

      <div className={styles.infoColumn}>
        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.priceBox}>
          <div className={styles.priceLabel}>Launch price</div>
          <div className={styles.priceWrapper}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>{product.price}</span>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>Limited drop</span>
            <span className={styles.tag}>Free shipping</span>
            <span className={styles.tag}>3D verified</span>
          </div>
        </div>
        <div className={styles.specs}>
          <div className={styles.specRow}><span className={styles.specLabel}>Shipping</span><span>Express · 2-4 days</span></div>
          <div className={styles.specRow}><span className={styles.specLabel}>Returns</span><span>30-day guarantee</span></div>
          <div className={styles.specRow}><span className={styles.specLabel}>Viewer</span><span>WebGL · React Three Fiber</span></div>
        </div>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.actions}>
          <button type="button" className={styles.buyNow}>Buy now</button>
          <button type="button" className={styles.addToCart}>Add to bag</button>
        </div>
      </div>

      <div className={styles.detailSection}>
        <h2 className={styles.sectionTitle}>Why you will love it</h2>
        <div className={styles.featureGrid}>
          {product.features.map((feature, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}><FeatureIcon name={feature.icon} /></div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className={styles.sectionTitle}>Specifications</h2>
        <div className={styles.specsTable}>
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className={styles.specsItem}>
              <span className={styles.specsKey}>{key}</span>
              <span className={styles.specsValue}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

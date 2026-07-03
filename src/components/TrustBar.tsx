import styles from './TrustBar.module.css';

const items = [
  'WebGL Product Viewer', 'Real-time 3D', 'Free Shipping', 'Secure Checkout',
  'GLB Models', 'React Three Fiber', 'Next.js 14', 'Docker Ready',
];

export default function TrustBar() {
  const loop = [...items, ...items];
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

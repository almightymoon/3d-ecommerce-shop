'use client';

import Link from 'next/link';
import { Menu, X, ShoppingBag, Box } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Shop', href: '/' },
    { label: 'Showcase', href: '/showcase' },
    { label: 'GitHub', href: 'https://github.com/almightymoon/3d-ecommerce-shop' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Box className={styles.logoIcon} size={20} />
          <span className={styles.logoText}>Nova<span className={styles.logoAccent}>Mart</span></span>
        </Link>
        <div className={styles.desktopMenu}>
          {items.map(i => (
            <Link key={i.href} href={i.href} className={styles.navLink}>{i.label}</Link>
          ))}
          <button type="button" className={styles.cartBtn} aria-label="Cart">
            <ShoppingBag size={17} /><span>0</span>
          </button>
        </div>
        <button type="button" className={styles.mobileToggle} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          {items.map(i => (
            <Link key={i.href} href={i.href} className={styles.mobileLink} onClick={() => setOpen(false)}>{i.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

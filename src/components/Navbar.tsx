"use client";

import Link from "next/link";
import { Menu, X, ShoppingBag, Box } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Shop", href: "/" },
    { label: "3D Showcase", href: "/showcase" },
    { label: "GitHub", href: "https://github.com/almightymoon/3d-ecommerce-shop" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Box className={styles.logoIcon} size={22} />
          <span className={styles.logoText}>Nova<span className={styles.logoAccent}>Mart</span></span>
        </Link>
        <div className={styles.desktopMenu}>
          {items.map((i) => (
            <Link key={i.href} href={i.href} className={styles.navLink}>{i.label}</Link>
          ))}
          <button type="button" className={styles.cartBtn} aria-label="Cart">
            <ShoppingBag size={18} /><span className={styles.cartBadge}>3D</span>
          </button>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className={styles.mobileToggle} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            {items.map((i) => (
              <Link key={i.href} href={i.href} className={styles.mobileLink} onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

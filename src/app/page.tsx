"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "lucide-react";
import { products } from "@/data/products";
import HeroBanner from "@/components/HeroBanner";
import styles from "./page.module.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const categories = ["All Items", "Toys", "Shoes", "Home"];

  const filteredProducts =
    activeCategory === "All Items"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="container">
      <HeroBanner />
      <div id="catalog" className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={activeCategory === cat ? styles.active : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.content}>
          <div className={styles.sectionHeader}>
            <h2>Featured Products</h2>
            <p>Tap any item to open the interactive 3D viewer</p>
          </div>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className={styles.card}>
                <span className={styles.badge}><Box size={12} /> 360 3D</span>
                <div className={styles.imageWrapper}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain", padding: "1rem" }} />
                </div>
                <div className={styles.info}>
                  <span className={styles.category}>{product.category}</span>
                  <h2>{product.name}</h2>
                  <div className={styles.priceWrapper}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

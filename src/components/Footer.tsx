import { ComponentPropsWithoutRef } from "react";
import styles from "./Footer.module.css";

export default function Footer({ className, ...props }: ComponentPropsWithoutRef<"footer">) {
    return (
        <footer className={`${styles.footerWrapper} ${className}`} {...props}>
            <div className={styles.container}>
                <div className={styles.footerCard}>

                    {/* Top Content: Brand Only */}
                    <div className={styles.topSection}>
                        <div className={styles.brandSection}>
                            <p className={styles.brandTextWrapper}>
                                <span className={styles.brandTitle}>
                                    NovaMart
                                </span>
                                <span className={styles.brandDesc}>
                                    &nbsp;
                                    A futuristic 3D e-commerce experience — inspect products in full WebGL before you buy. Built with Next.js and React Three Fiber.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    {/* Bottom Content: Copyright Only */}
                    <div className={styles.bottomSection}>
                        <p>© {new Date().getFullYear()} NovaMart · Enhanced by <a href="https://github.com/almightymoon" style={{ color: 'var(--primary)' }}>almightymoon</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

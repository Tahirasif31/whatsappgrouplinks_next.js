"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.join}>
          <h2 className={styles.logo}>Whatsapp Connects</h2>
          <p className={styles.description}>
            Unlock limitless opportunities and join our exclusive WhatsApp
            groups link website today!
          </p>
          <div className={styles.contactContainer}>
            <div className={styles.email}>
              <p className={styles.info}>Email us at</p>
              <p className={styles.address}>Tahirasif31@gmail.com</p>
            </div>
            <div className={styles.phone}>
              <p className={styles.info}>Call us at</p>
              <p className={styles.address}>+92 317 3362620</p>
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <h2 className={styles.submitTitle}>Let&apos;s Submit!</h2>
          <p className={styles.submitDescription}>
            Share your WhatsApp group links hassle-free on our convenient
            submission page and connect with like-minded individuals instantly!
          </p>
          <div className={styles.icons}>
            <ion-icon name={"logo-facebook"}></ion-icon>
            <ion-icon name={"logo-twitter"}></ion-icon>
            <ion-icon name={"logo-instagram"}></ion-icon>
            <ion-icon name={"logo-linkedin"}></ion-icon>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; Copyright 2024</p>
          <ul className={styles.footerLinks}>
            <li className={styles.link}>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"/categories"} className={styles.link}>
                Categories
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"/privacy"} className={styles.link}>
                Privacy Policy
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"/contact-us"} className={styles.link}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

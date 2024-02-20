"use client";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";

function Nav() {
  const [mobNav, setMobNav] = useState(false);
  function mobNavHidden() {
    setMobNav((mobNav) => (mobNav ? false : mobNav));
  }
  return (
    <nav className={`${styles.nav} ${mobNav ? styles.navOpen : ""}`}>
      <div className={styles.navContainer}>
        <Link href={"/"} className={styles.link}>
          <span className={styles.logo}>Whatsapp Communities</span>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/news"} className={styles.link}>
                News
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/business"} className={styles.link}>
                Business
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/cricket"} className={styles.link}>
                Cricket
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/pubg"} className={styles.link}>
                Pubg
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/girls"} className={styles.link}>
                Girls
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/others"} className={styles.link}>
                Other
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link href={"/contact-us"} className={styles.link}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={styles.btnMobileNav}
          onClick={() => setMobNav((mobNav) => !mobNav)}
        >
          <ion-icon
            class={styles.iconMobileNav}
            name={`${mobNav ? "close" : "menu"}-outline`}
          ></ion-icon>
        </button>
      </div>
    </nav>
  );
}

export default Nav;

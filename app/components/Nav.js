"use client";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const [mobNav, setMobNav] = useState(false);
  function mobNavHidden() {
    setMobNav((mobNav) => (mobNav ? false : mobNav));
  }

  const pathname = usePathname();
  return (
    <nav className={`${styles.nav} ${mobNav ? styles.navOpen : ""}`}>
      <div className={styles.navContainer}>
        <Link
          href={"/"}
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <span className={styles.logo}>Whatsapp Communities</span>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/news"}
                className={`${styles.link} ${
                  pathname === "/news" ? styles.active : ""
                }`}
              >
                News
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/business"}
                className={`${styles.link} ${
                  pathname === "/business" ? styles.active : ""
                }`}
              >
                Business
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/cricket"}
                className={`${styles.link} ${
                  pathname === "/cricket" ? styles.active : ""
                }`}
              >
                Cricket
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/pubg"}
                className={`${styles.link} ${
                  pathname === "/pubg" ? styles.active : ""
                }`}
              >
                Pubg
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/girls"}
                className={`${styles.link} ${
                  pathname === "/girls" ? styles.active : ""
                }`}
              >
                Girls
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/others"}
                className={`${styles.link} ${
                  pathname === "/others" ? styles.active : ""
                }`}
              >
                Other
              </Link>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <Link
                href={"/contact-us"}
                className={`${styles.link} ${
                  pathname === "/contact-us" ? styles.active : ""
                }`}
              >
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

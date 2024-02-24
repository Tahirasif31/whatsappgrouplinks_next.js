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
        <div>
          <h2>Submit Your Groups!</h2>
          <p>
            Share your WhatsApp group links hassle-free on our convenient
            submission page and connect with like-minded individuals instantly!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

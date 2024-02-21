import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>Join Thousands Whatsapp Groups for free</h1>
          <p>
            Explore the definitive platform for discovering and sharing WhatsApp
            group links effortlessly.
          </p>
          <div className={styles.buttons}>
            <Link
              href={"categories"}
              className={`${styles.btnCta} ${styles.join}`}
            >
              Join Now
            </Link>
            <button className={styles.btnSeeAll}>
              <Link href={"contact-us"} className={styles.submit}>
                submit your group &nbsp;
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="12"
                    viewBox="0 0 25 12"
                    fill="none"
                  >
                    <path
                      d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                      fill="#F4F6FC"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="imgContainer">
          <Image
            src={"/HeroImg.svg"}
            alt="boy and girl chating on whatsapp"
            width={546}
            height={364}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

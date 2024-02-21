import Link from "next/link";
import styles from "./CategoriesCard.module.css";
import Image from "next/image";

function CategoriesCard({ category, key }) {
  return (
    <Link
      href={category.route}
      className={`${styles.cardContainer} ${styles.link}`}
      id={key}
    >
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={category.img}
          width={500}
          height={300}
          layout="responsive"
        />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{category.title}</h3>
          <p className={styles.description}>{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
export default CategoriesCard;

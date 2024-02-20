import Link from "next/link";
import styles from "./CategoriesCard.module.css";

function CategoriesCard({ category, key }) {
  return (
    <Link
      href={category.route}
      className={`${styles.cardContainer} ${styles.link}`}
      id={key}
    >
      <div className={styles.card}>
        <img className={styles.img} src={category.img} />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{category.title}</h3>
          <p className={styles.description}>{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
export default CategoriesCard;

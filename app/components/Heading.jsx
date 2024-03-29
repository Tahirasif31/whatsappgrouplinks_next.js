import styles from "./Heading.module.css";

function Heading({ title, end }) {
  return (
    <h1 className={styles.title}>
      Join {title} Groups {end}
    </h1>
  );
}
export default Heading;

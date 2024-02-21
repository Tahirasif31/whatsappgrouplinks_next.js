import styles from "./Heading.module.css";

function Heading({ title }) {
  return <h1 className={styles.title}>Join {title} Groups for Daily News</h1>;
}
export default Heading;

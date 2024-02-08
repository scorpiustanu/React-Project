import styles from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return <input className={styles.display} type="text" value={displayvalue} />;
};

export default Display;

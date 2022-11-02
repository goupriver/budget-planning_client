import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Welcome to HAVE</h1>
        <div className={styles.desc}>
          Budget manager will help you take your budget, money and finances
          under control and won’t take much time.
        </div>
        <div className={styles.links}>
          {" "}
          <Link to="/register">register</Link> <span className={styles.or}>or</span> <Link to="/login">log in</Link>
        </div>
      </div>
      <div className={styles.bigLetter}>o</div>
    </div>
  );
};

import styles from "./Settings.module.css";

import { Button } from "common/buttons";
import { Icon } from "common/media";
import { Switch } from "common/forms";

export const Settings = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.page}>
          <h1>Settings</h1>
          <Button variant="secondary_white">Log Out</Button>
        </div>
        <div className={styles.email}>
          <h4>E-mail</h4>
          <h4>goupriver@gmail.com</h4>
        </div>
      </header>
      <main>
        <button className={styles.password}>
          <span className={styles.name}>Change Password</span>
          <Icon variant={styles.chevron}>chevronRight</Icon>
        </button>
        <div className={styles.switch}>
          <span className={styles.name}>Use Face ID</span>
          <Switch type="checkbox" />
        </div>
        <div className={styles.currency}>
          <div className={styles.name}>Currency</div>
          <button>
            <div className={styles.circle}>
              <span>$</span>
            </div>
            <div className={styles.text}>US Dollars</div>
            <Icon variant={styles.chevron}>chevronRight</Icon>
          </button>
        </div>
      </main>
    </div>
  );
};

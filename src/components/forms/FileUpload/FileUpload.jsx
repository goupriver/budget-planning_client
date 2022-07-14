import { Icon } from "components/media";
import styles from "./FileUpload.module.css";

export const FileUpload = () => {
  return (
    <label htmlFor="fileInput" className={styles.fileInput}>
      <input type="file" name="fileInput" id="fileInput" />
      <div><Icon>add</Icon></div>
    </label>
  );
};

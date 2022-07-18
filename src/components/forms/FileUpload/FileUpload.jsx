import { Icon } from "components/media";
import styles from "./FileUpload.module.css";

export const FileUpload = ({ name, register }) => {
  return (
    <label htmlFor={name} className={styles.fileInput}>
      <input type="file" name={name} {...register(name)} id={name} />
      <div>
        <Icon>add</Icon>
      </div>
    </label>
  );
};

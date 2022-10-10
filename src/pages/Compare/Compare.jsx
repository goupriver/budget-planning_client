import { ChartWrapper, Horizontal, Vertical } from "common/charts";
import { Icon } from "common/media";
import { TitleChart } from "common/text";
import { useNavigate } from "react-router-dom";
import { getMonth, getYear } from "services/dates/format.helpers.ts";
import styles from "./Compare.module.css";

export const Compare = () => {
  const navigate = useNavigate();

  const onComeBackClick = () => {
    navigate("/stats/", { replace: true });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.title}>
          <button onClick={onComeBackClick}>
            <Icon>chevronLeft</Icon>
          </button>
          <h3>Compare</h3>
        </div>
        <div className={styles.compare}>
          <div className={styles.first}>
            <div className={styles.circle}></div>
            <div className={styles.month}>{getMonth(new Date())}</div>
            <div className={styles.year}>{getYear(new Date())}</div>
          </div>
          <div className={styles.last}>
            <div className={styles.circle}></div>
            <div className={styles.month}>{getMonth(new Date())}</div>
            <div className={styles.year}>{getYear(new Date())}</div>
          </div>
        </div>
      </header>
      <main>
        <ChartWrapper mb={true}>
          <TitleChart align="left">Budget</TitleChart>
          <Horizontal />
        </ChartWrapper>
        <ChartWrapper mb={true}>
          <TitleChart align="left">Expenses</TitleChart>
          <Horizontal />
        </ChartWrapper>
        <ChartWrapper mb={true}>
          <TitleChart align="center">Expenses / Category</TitleChart>
          <Vertical />
        </ChartWrapper>
      </main>
    </div>
  );
};

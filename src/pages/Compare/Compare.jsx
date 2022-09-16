import { ChartWrapper, Horizontal, Vertical } from "common/charts";
import { Icon } from "common/media";
import { TitleChart } from "common/text";
import { getYear } from "date-fns";
import { selectAllBudget, selectStatusBudget } from "features/budget/budgetSlices";
import {
  selectAllExpenses,
  selectStatusExpenses,
} from "features/expenses/expensesSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMonth } from "services/dates/format.helpers";
import { getData } from "services/math/charts";
import styles from "./Compare.module.css";

export const Compare = () => {
  const expenses = useSelector(selectAllExpenses);
  const allBudget = useSelector(selectAllBudget);
  const status = useSelector(selectStatusExpenses);
  const statusAllBudget = useSelector(selectStatusBudget)

  const navigate = useNavigate();

  const [first, second] = Object.entries(expenses)

  let data 

  if (status === "succeeded") {
    data = getData([first, second], allBudget)
  }

  const onComeBackClick = () => {
    navigate("/stats/", { replace: true });
  };

  if (status === 'succeeded' && statusAllBudget === 'succeeded') {
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
              <div className={styles.month}>{getMonth(new Date(data.second.year, data.second.month - 1))}</div>
              <div className={styles.year}>{getYear(new Date(data.second.year, data.second.month -1))}</div>
            </div>
            <div className={styles.last}>
              <div className={styles.circle}></div>
              <div className={styles.month}>{getMonth(new Date(data.first.year, data.first.month -1))}</div>
              <div className={styles.year}>{getYear(new Date(data.first.year, data.first.month -1))}</div>
            </div>
          </div>
        </header>
        <main>
          <ChartWrapper mb={true}>
            <TitleChart align="left">Budget</TitleChart>
            <Horizontal type="budget" />
          </ChartWrapper>
          <ChartWrapper mb={true}>
            <TitleChart align="left">Expenses</TitleChart>
            <Horizontal type="expenses" />
          </ChartWrapper>
          <ChartWrapper mb={true}>
            <TitleChart align="center">Expenses / Category</TitleChart>
            <Vertical />
          </ChartWrapper>
        </main>
      </div>
    );
  }
};

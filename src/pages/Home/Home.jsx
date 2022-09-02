import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Add, Button } from "common/buttons";
import { ChartWrapper, Doughnut } from "common/charts";
import { ListExpenses } from "features/expenses/ListExpenses/ListExpenses";
import { Slider } from "common/media";
import { MonthAndYear } from "common/text";
import { selectAllExpenses } from "features/expenses/expensesSlice";

import styles from "./Home.module.css";

export const Home = () => {
  const expenses = useSelector(selectAllExpenses);
  const navigate = useNavigate();

  const onOpenEditBudgetClick = () => {
    navigate("/edit");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <Slider>
          <ChartWrapper swiper={true}>
            <MonthAndYear>{new Date()}</MonthAndYear>
            <Doughnut />
            <div className={styles.centerButton}>
              <Button onClick={onOpenEditBudgetClick} variant="secondary_blue">
                Edit Budget
              </Button>
            </div>
          </ChartWrapper>
        </Slider>
      </header>
      {Object.keys(expenses).length ? (
        <main>
          <div className={styles.seeAll}>
            <div>Lost Expenses</div>
            <Link to="stats">See all</Link>
          </div>
          <ListExpenses />
        </main>
      ) : (
        <div className={styles.add}>
          <Add />
          <h5>Add Expense</h5>
        </div>
      )}
    </div>
  );
};

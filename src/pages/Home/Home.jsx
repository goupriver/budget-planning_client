import { Add, Button } from "components/buttons";
import { ChartWrapper, Doughnut } from "components/charts";
import { ListExpenses } from "components/layout";
import { Slider } from "components/media";
import { MonthAndYear } from "components/text";
import { expense } from "data/data";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

export const Home = () => {
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
      {Object.keys(expense).length ? (
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

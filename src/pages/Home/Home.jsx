import { Add, Button } from "components/buttons";
import { ChartWrapper, Doughnut } from "components/charts";
import { ListExpenses } from "components/layout";
import { Slider } from "components/media";
import { MonthAndYear } from "components/text";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Slider>
          <ChartWrapper>
            <MonthAndYear>{new Date()}</MonthAndYear>
            <Doughnut />
            <div className={styles.centerButton}>
              <Button variant="secondary_blue">Edit Budget</Button>
            </div>
          </ChartWrapper>
        </Slider>
      </header>
      <div className={styles.add}>
        <Add />
        <h5>Add Expense</h5>
      </div>
      <main>
        <div className={styles.seeAll}>
          <div>Lost Expenses</div>
          <a href="#">See all</a>
        </div>
        <ListExpenses />
      </main>
    </div>
  );
};

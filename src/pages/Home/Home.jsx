import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Add, Button } from "common/buttons";
import { ChartWrapper, Doughnut } from "common/charts";
import { ListExpenses } from "features/expenses/ListExpenses/ListExpenses";
import { Slider } from "common/media";
import { MonthAndYear } from "common/text";
import { fetchExpenses, selectAllExpenses, selectStatusExpenses } from "features/expenses/expensesSlice";

import styles from "./Home.module.css";
import { useEffect } from "react";

export const Home = () => {
  const expenses = useSelector(selectAllExpenses);
  
  const navigate = useNavigate();
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchExpenses())
  }, [dispatch])

  const onOpenEditBudgetClick = () => {
    navigate("/edit");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <Slider>
          <ChartWrapper swiper={true}>
            <MonthAndYear>{new Date()}</MonthAndYear>
            <Doughnut expenses={expenses}/>
            <div className={styles.centerButton}>
              <Button onClick={onOpenEditBudgetClick} variant="secondary_blue">
                Edit Budget
              </Button>
            </div>
          </ChartWrapper>
        </Slider>
      </header>
      <main>
        <div className={styles.seeAll}>
          <div>Lost Expenses</div>
          <Link to="stats/log">See all</Link>
        </div>
        <ListExpenses />
      </main>
      {!!Object.keys(expenses).length || (
        <div className={styles.add}>
          <Add />
          <h5>Add Expense</h5>
        </div>
      )}
    </div>
  );
};

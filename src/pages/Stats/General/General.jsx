import { useSelector } from "react-redux";
import {
  ChartWrapper,
  Doughnut,
  DoughnutXS,
  String,
  VerticalSingle,
} from "common/charts";
import { MonthAndYear, TitleChart } from "common/text";
import { selectAllExpenses } from "features/expenses/expensesSlice";
import { selectCurrentMonth } from "features/budget/budgetSlices";

export const General = () => {
  const expenses = useSelector(selectAllExpenses);
  const { budget } = useSelector(selectCurrentMonth);

  return (
    <>
      <ChartWrapper mb={true}>
        <MonthAndYear>{new Date()}</MonthAndYear>
        <Doughnut expenses={expenses} />
      </ChartWrapper>
      <ChartWrapper mb={true}>
        <TitleChart align="center">Expenses / Category</TitleChart>
        <VerticalSingle expenses={expenses} />
        <DoughnutXS expenses={expenses} budget={budget} />
      </ChartWrapper>
      <ChartWrapper mb={true}>
        <TitleChart align="center">Expenses / Day</TitleChart>
        <String expenses={expenses}/>
      </ChartWrapper>
    </>
  );
};

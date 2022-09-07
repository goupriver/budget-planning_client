import {
  ChartWrapper,
  Doughnut,
  DoughnutXS,
  String,
  VerticalSingle,
} from "common/charts";
import { MonthAndYear, TitleChart } from "common/text";

export const General = () => {
  return (
    <>
      <ChartWrapper mb={true}>
        <MonthAndYear>{new Date()}</MonthAndYear>
        <Doughnut />
      </ChartWrapper>
      <ChartWrapper mb={true}>
        <TitleChart align="center">Expenses / Category</TitleChart>
        <VerticalSingle />
        <DoughnutXS />
      </ChartWrapper>
      <ChartWrapper mb={true}>
        <TitleChart align="center">Expenses / Day</TitleChart>
        <String />
      </ChartWrapper>
    </>
  );
};

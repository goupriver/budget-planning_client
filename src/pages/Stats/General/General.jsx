import {
  ChartWrapper,
  Doughnut,
  DoughnutXS,
  String,
  VerticalSingle,
} from "components/charts";
import { MonthAndYear, TitleChart } from "components/text";

import styles from "./General.module.css";

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

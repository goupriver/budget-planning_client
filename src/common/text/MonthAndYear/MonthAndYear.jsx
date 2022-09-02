import styles from './MonthAndYear.module.css'
import {getYear, getMonth} from 'services/dates/format.helpers'

export const MonthAndYear = ({children: date}) => {
  const month = getMonth(date)
  const year = getYear(date)

  return (
    <div className={styles.monthAndYear}>
      <h1>{month}</h1>
      <h6>{year}</h6>
    </div>
  );
};

import { Link } from "react-router-dom";

import "./ListExpenses.css";
import { dateOfMonth, dateOfWeek } from "services/dates/format.helpers.ts";
import { Icon } from "common/media";
import { getCurrencySymbol } from "services/currency.helpers";

import { prepareListExpenses } from "./helpers/prepareListExpenses";
import { useSelector } from "react-redux";
import { expenses } from "../expensesSlice";
import { getDay, getDayOfWeek } from "services/dates/format.helpers";

export const ListExpenses = () => {
  const currency = 'USD'
  const expensesList = useSelector(expenses)
  const { listDates, listExpenses } = prepareListExpenses(expensesList)
  let content;
  
  content = listDates.map((date) => {
    const [year, month, day] = date.split('-')

    return (
      <div className="one-day-expenses" key={date}>
        <div className="day-of-the-week"> 
          <h4 className="number">{getDay(new Date(year, month, day))}</h4>
          <h4 className="date">{getDayOfWeek(new Date(year, month, day))}</h4>
        </div>
        {listExpenses[date].map(({ category, amount, id }) => (
          <Link to={`/item/${id}`} key={id}>
            <div className="list">
              <span className="category-icon material-icons">
                <Icon variant="category-icon">{category}</Icon>
              </span>
              <div className="category-and-price">
                <h4 className="category">{category}</h4>
                <h3 className="price">
                  {amount} {getCurrencySymbol(currency)}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  });

  return <div className="list-expenses">{content}</div>;
};

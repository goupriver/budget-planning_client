import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ListExpenses.css";
import { dateOfMonth, dateOfWeek } from "services/dates/format.helpers";
import { Icon } from "common/media";
import { getCurrencySymbol } from "services/currency.helpers";

import { selectAllExpenses } from "features/expenses/expensesSlice";
import { selectCurrency } from "features/user/userSlice";

export const ListExpenses = () => {
  const expenses = useSelector(selectAllExpenses);
  const currency = useSelector(selectCurrency);

  const listOfDates = Object.keys(expenses);

  return (
    <div className="list-expenses">
      {listOfDates.map((date) => {
        return (
          <div className="one-day-expenses" key={date}>
            <div className="day-of-the-week">
              <h4 className="number">{dateOfMonth(date)}</h4>
              <h4 className="date">{dateOfWeek(date)}</h4>
            </div>
            {expenses[date].map(({ category, amount, id }) => (
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
      })}
    </div>
  );
};

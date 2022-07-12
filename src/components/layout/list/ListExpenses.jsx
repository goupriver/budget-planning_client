import "./ListExpenses.css";
import { getCurrencySymbol } from "utils/currency.helpers";
import { Icon } from "components/media";
import { dateOfMonth, dateOfWeek } from "utils/dates/format.helpers";

import { api, currencyUserApi } from "data/data";

export const ListExpenses = () => {
  const data = api;
  const listOfDates = Object.keys(data);

  return (
    <div className="list-expenses">
      {listOfDates.map((date) => {
        return (
          <div className="one-day-expenses" key={date}>
            <div className="day-of-the-week">
              <h4 className="number">{dateOfMonth(date)}</h4>
              <h4 className="date">{dateOfWeek(date)}</h4>
            </div>
            {data[date].map(({ category, price, id }) => (
              <div className="list" key={id}>
                <span className="category-icon material-icons">
                  <Icon variant="category-icon">{category}</Icon>
                </span>
                <div className="category-and-price">
                  <h4 className="category">{category}</h4>
                  <h3 className="price">
                    {price} {getCurrencySymbol(currencyUserApi)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

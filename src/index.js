import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "index.css";
import App from "app/App";
import { store } from "app/store";
import { fetchCurrentMonth } from "features/budget/budgetSlices";

store.dispatch(fetchCurrentMonth(new Date()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

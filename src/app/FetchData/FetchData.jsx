import { activityFetch, createActivity } from "features/activity/activitySlice";
import { budgetFetch } from "features/budget/budgetSlice";
import { expensesFetch } from "features/expenses/expensesSlice";
import { fetchUser } from "features/user/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentDate } from "services/dates/format.helpers";
import { app } from "services/firebase/config";

export const FetchData = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useLayoutEffect(() => {
    const currentDate = getCurrentDate();

    onAuthStateChanged(auth, async (user) => {
      if (auth.currentUser) {
        const {
          payload: { userId },
        } = await dispatch(fetchUser(user.uid));

        const { payload: activityList } = await dispatch(
          activityFetch({ userId, date: currentDate })
        );

        const isCurrentMonth = activityList.some((el) => el.current);
        !isCurrentMonth && (await dispatch(createActivity(userId)));

        const s = activityList.some((el) => el.current === "ad");
        await dispatch(budgetFetch({ userId, date: currentDate }));
        await dispatch(expensesFetch({ userId, date: currentDate }));
      }
    });
  });
  return false;
};

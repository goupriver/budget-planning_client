import { activityFetch, createActivity } from "features/activity/activitySlice";
import { budgetFetch } from "features/budget/budgetSlice";
import { expensesFetch } from "features/expenses/expensesSlice";
import { fetchUser, initUser } from "features/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentDate } from "services/dates/format.helpers";

export const FetchData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const response = async () => {
      console.time('er')
      const currentDate = getCurrentDate()
      
      const { payload: { userId } } = await dispatch(fetchUser('e98nvt3894'))

      const { payload: activityList } = await dispatch(activityFetch({userId, date: currentDate}))

      const isCurrentMonth = activityList.some(el => el.current)
      !isCurrentMonth && await dispatch(createActivity(userId))

      const s = activityList.some(el => el.current === 'ad')
      await dispatch(budgetFetch({userId, date: currentDate}))
      await dispatch(expensesFetch({ userId, date: currentDate }))
      console.timeEnd('er')
    }

    response()
    const create = async () => {
      dispatch(initUser({ uid: 'e98nvt3894', email: 'reyneke1703@gmail.com' }))
    }
    // create()
  }, [])
  return false
}
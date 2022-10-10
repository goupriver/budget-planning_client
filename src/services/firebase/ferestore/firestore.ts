import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getCurrentDate, getDateEndtOfMonth, getDateStartOfMonth, getMonth, getYear } from "services/dates/format.helpers";
import { db } from "../config";
import { UID, Email, UserID, Budget, IExpense, IUser, Currency, IActivity, INewExpense } from "types/types";

// USER //

export async function createUser({ uid, email }: { uid: UID, email: Email }) {
  console.log(uid, email);

  const userRef = collection(db, "users")
  const userResponse = await addDoc(userRef, { email, uid, currency: 'USD' });
  const userId: UserID = userResponse.id

  return { userId, email, currency: 'USD' as Currency }
}

export async function getUser(uid: UID) {
  const q = query(collection(db, "users"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  let user!: IUser;

  querySnapshot.forEach((doc) => {
    user = { userId: doc.id, email: doc.data().email, currency: doc.data().currency }
  });

  return user
}

// ACTIVITY //

export async function initialActivity(userId: UserID) {
  const date = getCurrentDate()
  const month = getMonth(date)
  const year = getYear(date)

  const activityRef = collection(db, `users/${userId}/activity/`)
  await addDoc(activityRef, { month, year });

  return { month, year, current: true }
}

export async function getActivity(userId: UserID, date: Date) {
  const currentMonth = getMonth(date)
  const currentYear = getYear(date)

  const q = query(collection(db, `users/${userId}/activity`));
  const querySnapshot = await getDocs(q);

  let activity: IActivity[] = []

  querySnapshot.forEach((doc) => {
    const month = doc.data().month
    const year = doc.data().year

    const current = currentMonth === month && currentYear === year

    activity.push({ month, year, current })
  });

  const sortedData = activity.sort((a, b) => (a.month + a.year) - (b.month + b.year))

  return sortedData
}

// BUDGET //

export async function createBudget(userId: UserID, date: Date, budget: Budget) {
  const month = getMonth(date)
  const year = getYear(date)

  const activityRef = collection(db, `users/${userId}/budget/`)

  await addDoc(activityRef, { month, year, budget });

  return { month, year, budget }
}


export async function getBudget(userId: UserID, date: Date) {
  const month = getMonth(date)
  const year = getYear(date)

  let data = {}

  const q = query(collection(db, `users/${userId}/budget`), where("month", "==", month), where("year", "==", year));
  const querySnapshot = await getDocs(q);
  !querySnapshot.empty && querySnapshot.forEach((doc) => {
    data = doc.data()
  });

  return data
}

export async function updateBudget(userId: UserID, date: Date, budget: Budget) {
  const month = getMonth(date)
  const year = getYear(date)
  console.log();
  
  const q = query(collection(db, `users/${userId}/budget`), where("month", "==", month), where("year", "==", year));

  const querySnapshot = await getDocs(q);

  let id;

  querySnapshot.forEach((doc) => {
    id = doc.id
  })

  const docRef = doc(db, `users/${userId}/budget/${id}`);

  await updateDoc(docRef, { budget });

  return { budget, month, year } 
}

// EXPENSE //

export async function addExpense(userId: UserID, expense: INewExpense) {
  const activityRef = collection(db, `users/${userId}/expenses`);

  const expenseResponse = await addDoc(activityRef, expense);

  return {
    id: expenseResponse.id,
    ...expense,
    date: expense.date.toISOString(),
  }
}

export async function getExpenses(userId: UserID, date: Date) {
  const startMonth = getDateStartOfMonth(date)
  const endMonth = getDateEndtOfMonth(date)
  
  const q = query(collection(db, `users/${userId}/expenses`), where("date", "<=", endMonth), where("date", ">=", startMonth));
  let expenses: IExpense[] = []
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const { amount, repeat, category, message, file, date } = doc.data()
    const datePrepare = new Date(date.seconds * 1000).toISOString()

    expenses.push({
      id: doc.id,
      amount,
      repeat,
      category,
      message,
      file,
      date: datePrepare
    })
  });

  return expenses
}
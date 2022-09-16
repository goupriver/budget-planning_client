import {
  getDocs,
  addDoc,
  collection,
  query,
  where,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getCompareDate } from "services/dates/format.helpers";
import { db } from "../config";

export async function add(expense) {
  const { category, amount, repeat, file, details, date } = expense;

  const docRef = await addDoc(collection(db, "expenses"), {
    category,
    amount,
    repeat,
    details,
    // file,
    date,
  });

  return docRef.id;
}

export async function get() {
  const querySnapshot = await getDocs(collection(db, "expenses"));
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id, date: doc.data().date.toMillis() });
  });

  return data;
}

export async function getFiltered({ category, amount }) {
  const expensesRef = collection(db, "expenses");
  // ПРОСТЫЕ ЗАПРОСЫ
  // const q = query(expensesRef, where("category", "==", 'Bills'));

  // Используйте inоператор для объединения до 10 == предложений равенства ( )
  // в одном поле с логическим оператором OR. Запрос inвозвращает документы,
  // в которых данное поле соответствует любому из значений сравнения.
  const q = query(
    expensesRef,
    where("category", "in", category),
    where("amount", ">", amount.min),
    where("amount", "<", amount.max)
  );

  const querySnapshot = await getDocs(q);

  let data = [];

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id, date: doc.data().date.toMillis() });
  });

  return data;

  // СОСТАВНЫЕ ЗАПРОСЫ
  // Вы можете выполнять сравнение диапазонов ( <, <=, >, >=)
  // или не равно ( !=) только для одного поля.
  // Для == можно выполнять сравнения для разных полей (!не уверен, сам додумал)
  // YES! const q1 = query(citiesRef, where("state", ">=", "CA"), where("state", "<=", "IN"));
  // NO!  const q = query(citiesRef, where("state", ">=", "CA"), where("population", ">", 100000));
}

export const getFilteredByDate = async (date) => {
  const expensesRef = collection(db, "expenses");

  const q = query(
    expensesRef,
    where("date", ">", date.start),
    where("date", "<", date.end)
  );

  const querySnapshot = await getDocs(q);

  let data = [];

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id, date: doc.data().date.toMillis() });
  });

  return data;
};

export const compareByDate = async (date) => {
  const expensesRef = collection(db, "expenses");

  const q = query(
    expensesRef,
    where("date", ">", date[0].startOfMonth),
    where("date", "<", date[1].endOfMonth)
  );

  const querySnapshot = await getDocs(q);

  let data = [];

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id, date: doc.data().date.toMillis() });
  });

  return data;
};

export async function FgetAllBudget() {
  const querySnapshot = await getDocs(collection(db, "budget"));
  let data = [];
  
  querySnapshot.forEach((doc) => {
    data.push({ budget: doc.data().budget, date: doc.id });
  });

  return data;
}

export const FgetBudget = async (date) => {
  const docRef = doc(db, "budget", date);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { budget: docSnap.data().budget, date: docSnap.id };
  } else {
    return docSnap.exists();
  }
};

export const FsetBudget = async (date) => {
  await setDoc(doc(db, "budget", date), { budget: 0 });
  return { budget: 0, date };
};

export const FeditBudget = async ({ date, budget }) => {
  const docRef = doc(db, "budget", date);

  await updateDoc(docRef, {
    budget,
  });
};

export const getCompereMonth = async (date) => {
  const arrayDates = getCompareDate(date);

  const expensesRef = collection(db, "expenses");

  const q1 = query(
    expensesRef,
    where("date", ">", arrayDates[0].startOfMonth),
    where("date", "<", arrayDates[0].endOfMonth)
  );

  const q2 = query(
    expensesRef,
    where("date", ">", arrayDates[1].startOfMonth),
    where("date", "<", arrayDates[1].endOfMonth)
  );

  const querySnapshot1 = await getDocs(q1);
  const querySnapshot2 = await getDocs(q2);

  let data1 = [];

  querySnapshot1.forEach((doc) => {
    data1.push({
      id: doc.id,
      date: doc.data().date.toMillis(),
      amount: doc.data().amount,
      category: doc.data().category,
    });
  });

  let data2 = [];

  querySnapshot2.forEach((doc) => {
    data2.push({
      id: doc.id,
      date: doc.data().date.toMillis(),
      amount: doc.data().amount,
      category: doc.data().category,
    });
  });

  return [...data1, ...data2];
};

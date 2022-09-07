import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../config";

export async function add(expense) {
  const { category, amount, repeat, file, details, date } = expense;

  const docRef = await addDoc(collection(db, "expenses"), {
    category,
    amount,
    repeat,
    details,
    // file,
    // TODO: date нужно брать из прилетевшео объекта, а не генерировать здесь
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
  
  return data
}

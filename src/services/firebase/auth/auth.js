import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../config";
import { createUser } from "../ferestore/firestore";

const auth = getAuth(app);

export function createUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      // Signed in 
      const { email, uid } = user;
      createUser({uid: String(uid), email})
      return user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return error.code
    });
}

export function signInUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      // Signed in 
      const { email, uid } = user;
      return user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error.code
    });
}

export async function signOutUser() {
  await signOut(auth).then(() => {
  }).catch((error) => {
  });
}

export async function updatePassword(email) {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent!");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export function resetPassword(email) {
return sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return error.code
    // ..
  });
}

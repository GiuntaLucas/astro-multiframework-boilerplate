import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BehaviorSubject } from "rxjs";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_APIKEY,
  authDomain: import.meta.env.PUBLIC_AUTHDOMAIN,
  projectId: import.meta.env.PUBLIC_PROJECTID,
  storageBucket: import.meta.env.PUBLIC_STORAGEBUCKET,
  messagingSenderId: import.meta.env.PUBLIC_MESSAGINGSENDERID,
  appId: import.meta.env.PUBLIC_APPID,
  measurementId: import.meta.env.PUBLIC_MEASUREMENTID
}

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("user")));

onAuthStateChanged(auth, user => {
  console.log(user)
  if(!user) {
    currentUserSubject.next(user);
    localStorage.removeItem('user');
    return;
  }
  currentUserSubject.next(user);
  localStorage.setItem('user', JSON.stringify(user))
})

export const currentUser$ = currentUserSubject.asObservable();

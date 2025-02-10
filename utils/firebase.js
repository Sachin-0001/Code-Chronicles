import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVN2SS62D8WtYo1iILt_u8p0Z0pL7H9iE",
  authDomain: "code-chronicles-1adfa.firebaseapp.com",
  projectId: "code-chronicles-1adfa",
  storageBucket: "code-chronicles-1adfa.firebasestorage.app",
  messagingSenderId: "524425951970",
  appId: "1:524425951970:web:98a5e0c17ff07833873cbb",
  measurementId: "G-7MMJTMRJ2R"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };

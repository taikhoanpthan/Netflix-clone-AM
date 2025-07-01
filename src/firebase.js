// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVvZmQmelrEGpiHysYWlbnD7o397-J_9E",
  authDomain: "myflit-am.firebaseapp.com",
  projectId: "myflit-am",
  storageBucket: "myflit-am.firebasestorage.app",
  messagingSenderId: "26531501912",
  appId: "1:26531501912:web:9d01c0c61c0693f3cfb72d",
  measurementId: "G-E4P1J50TVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up Function
export const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Update user profile with display name
    await updateProfile(user, { displayName: name });

    // Add user details to Firestore
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("User registered successfully!");
    return user;
  } catch (error) {
    console.error("Signup Error:", error);
    toast.error(error.message);
  }
};

// Login Function
export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    toast.success(`Welcome back, ${user.displayName || user.email}!`);
    return user;
  } catch (error) {
    console.error("Login Error:", error);
    toast.error(error.message);
  }
};

// Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("You have been logged out!");
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error(error.message);
  }
};

// Export Firebase services
export { auth, db };

// ShiftSync Firebase Modular SDK Configuration & Helpers
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDoc,
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Project Configuration for shift-sync-a0b66
export const firebaseConfig = {
  apiKey: window.FIREBASE_API_KEY || "AIzaSyShiftSyncEngineKeyForHandoverConsole",
  authDomain: "shift-sync-a0b66.firebaseapp.com",
  projectId: "shift-sync-a0b66",
  storageBucket: "shift-sync-a0b66.firebasestorage.app",
  messagingSenderId: "504998324015",
  appId: "1:504998324015:web:8a90f119b431c9a81f0b4"
};

// Initialize Firebase App & Services
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Authentication Helpers
export async function loginWithEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function registerWithEmail(email, password, displayName = "Operator") {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(userCredential.user, { displayName });
  }
  // Store user document in Firestore
  await setDoc(doc(db, "users", userCredential.user.uid), {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    displayName: displayName || userCredential.user.displayName,
    role: "Lead SRE",
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp()
  }, { merge: true });
  return userCredential;
}

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  // Upsert user profile
  await setDoc(doc(db, "users", result.user.uid), {
    uid: result.user.uid,
    email: result.user.email,
    displayName: result.user.displayName || "Google Operator",
    photoURL: result.user.photoURL,
    role: "Lead SRE",
    lastLogin: serverTimestamp()
  }, { merge: true });
  return result;
}

export async function logoutUser() {
  return await signOut(auth);
}

// Firestore Database Operations
export async function saveHandoverNote(noteData) {
  const docRef = doc(db, "handovers", noteData.docId || `SH-${Date.now()}`);
  await setDoc(docRef, {
    ...noteData,
    updatedAt: serverTimestamp(),
    auditHash: noteData.auditHash || "#9a81f0b4c8e712a10",
    groundingScore: noteData.groundingScore || 1.0,
    status: "APPROVED"
  }, { merge: true });
  return docRef.id;
}

export async function fetchRecentHandovers(limitCount = 5) {
  const q = query(collection(db, "handovers"), orderBy("updatedAt", "desc"), limit(limitCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export function subscribeToHandovers(callback) {
  const q = query(collection(db, "handovers"), orderBy("updatedAt", "desc"), limit(10));
  return onSnapshot(q, (snapshot) => {
    const handovers = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(handovers);
  });
}

// ====================================================================
// FIREBASE INTEGRATION MODULE (FUTURE READY)
// ====================================================================
// When you are ready to connect Firebase (Firestore, Auth, Storage),
// follow these simple steps:
// 1. Install firebase: npm install firebase
// 2. Add your keys into .env
// 3. Set VITE_ENABLE_FIREBASE="true" in .env
// ====================================================================

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

export const isFirebaseEnabled = Boolean(
  import.meta.env.VITE_ENABLE_FIREBASE === "true" && firebaseConfig.apiKey
);

let app = null;
let db = null;
let auth = null;
let storage = null;

// Dynamic initialization hook for future use without bundling overhead
export const initFirebase = async () => {
  if (!isFirebaseEnabled) return null;
  if (app) return { app, db, auth, storage };

  try {
    // Dynamic import to keep bundle lightweight if unused
    const { initializeApp } = await import("firebase/app");
    const { getFirestore } = await import("firebase/firestore");
    const { getAuth } = await import("firebase/auth");
    const { getStorage } = await import("firebase/storage");

    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);

    return { app, db, auth, storage };
  } catch (error) {
    console.warn("Firebase initialization skipped or failed:", error);
    return null;
  }
};

/**
 * Future Contact Form submission to Firestore
 */
export const submitContactToFirestore = async (formData) => {
  if (!isFirebaseEnabled) {
    // Graceful simulated fallback
    return { success: true, simulated: true };
  }

  try {
    const { db } = await initFirebase();
    const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    console.error("Firestore submission error:", err);
    throw err;
  }
};

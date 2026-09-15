import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import { getDatabase, ref, push, onValue, serverTimestamp as realtimeTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';

const firebaseConfig = {
    apiKey: 'AIzaSyA1XjZlbThiUK0huaLpU-j2tuYtx2VQcSA',
    authDomain: 'wikigames-b4e2b.firebaseapp.com',
    projectId: 'wikigames-b4e2b',
    databaseURL: 'https://wikigames-b4e2b-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'wikigames-b4e2b.firebasestorage.app',
    messagingSenderId: '44509280209',
    appId: '1:44509280209:web:3d40a6771abca9521312f0'
};

try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const realtimeDb = getDatabase(app);

    window.firebaseServices = {
        app,
        auth,
        db,
        realtimeDb,
        rtdb: realtimeDb,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        updateProfile,
        doc,
        getDoc,
        setDoc,
        collection,
        addDoc,
        onSnapshot,
        serverTimestamp,
        ref,
        push,
        onValue,
        realtimeTimestamp
    };

    console.info('[Firebase] Auth, Firestore e Realtime Database inicializados.');
    window.dispatchEvent(new CustomEvent('firebase-ready'));
} catch (error) {
    console.error('[Firebase] Falha ao inicializar os serviços:', error);
    window.dispatchEvent(new CustomEvent('firebase-error', { detail: error }));
}

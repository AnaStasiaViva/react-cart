import firebase from 'firebase/app';
import 'firebase/firestore';

//removed config
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: 'shopping-cart',
    storageBucket: 'shopping-cart.appspot.com',
    messagingSenderId: '',
    appId: '',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

import firebase from "firebase";// For Firebase JS SDK v7.20.0 and later, measurementId is optionalconst firebaseConfig = {    apiKey: "AIzaSyCKPJ-dr-8NuVombkdz5SjXY6NwhR4kjpA",    authDomain: "nth-drive-266709.firebaseapp.com",    databaseURL: "https://nth-drive-266709.firebaseio.com",    projectId: "nth-drive-266709",    storageBucket: "nth-drive-266709.appspot.com",    messagingSenderId: "751023917948",    appId: "1:751023917948:web:ae60a2dd229156be90f2f9",    measurementId: "G-472R58GGQF"};const firebaseApp = firebase.initializeApp(firebaseConfig)const auth = firebaseApp.auth();const db = firebaseApp.firestore()export {auth, db}
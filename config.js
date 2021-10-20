import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC87zUqRUHHG-sQ5EkLoBj8yaVoD4gzOp0",
    authDomain: "p-67-bf282.firebaseapp.com",
    databaseURL: "https://p-67-bf282-default-rtdb.firebaseio.com",
    projectId: "p-67-bf282",
    storageBucket: "p-67-bf282.appspot.com",
    messagingSenderId: "916625532760",
    appId: "1:916625532760:web:6f0296b7eeeec83c30672d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
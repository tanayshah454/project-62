import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAwZVbh_Lp1Vk97gBIfvakca826G3F9t1s",
    authDomain: "attendanceapp-5e745.firebaseapp.com",
    databaseURL: "https://attendanceapp-5e745-default-rtdb.firebaseio.com",
    projectId: "attendanceapp-5e745",
    storageBucket: "attendanceapp-5e745.appspot.com",
    messagingSenderId: "484938765069",
    appId: "1:484938765069:web:0a4ec71a81d6441a439644",
    measurementId: "G-K422EJ7H68"
  };

   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();
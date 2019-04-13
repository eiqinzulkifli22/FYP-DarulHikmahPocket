// import Firebase from '@firebase/app';
// import '@firebase/database';
// import '@firebase/storage';
// import '@firebase/auth';

// let config = {
//     apiKey: "AIzaSyA62phh4l2jYHUaKD9DERTU8WLFO3zWziI",
//     authDomain: "react-native-bb86a.firebaseapp.com",
//     databaseURL: "https://react-native-bb86a.firebaseio.com",
//     projectId: "react-native-bb86a",
//     storageBucket: "react-native-bb86a.appspot.com",
//     messagingSenderId: "606697324561"
// };

// let app = Firebase.initializeApp(config);
// export const db = app.database();

import Firebase from 'firebase';
 let config = {
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: ""
   

    apiKey: "AIzaSyA62phh4l2jYHUaKD9DERTU8WLFO3zWziI",
    authDomain: "react-native-bb86a.firebaseapp.com",
    databaseURL: "https://react-native-bb86a.firebaseio.com",
    projectId: "react-native-bb86a",
    storageBucket: "react-native-bb86a.appspot.com",
    messagingSenderId: "606697324561"
      };
let app = Firebase.initializeApp(config);
export const db = app.database();
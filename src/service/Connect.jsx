import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


export const app = firebase.initializeApp ({
    apiKey: "AIzaSyAGv8EK68fJJPXdtG3O75UF7D7_5TGUElo",
    authDomain: "nh-urban-sport.firebaseapp.com",
    databaseURL: "https://nh-urban-sport.firebaseio.com",
    projectId: "nh-urban-sport",
    storageBucket: "nh-urban-sport.appspot.com",
    messagingSenderId: "7120958805",
    appId: "1:7120958805:web:6ed7bb86b1a9109c"
});

export const getDatabase = () => {
  const myDatabase = app.database();
  return myDatabase;
};

export const getStorage = () => {
  const myStorageBucket = app.storage();
  return myStorageBucket;
}



  
  
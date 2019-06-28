import firebase from 'firebase/app'
import 'firebase/database'

const app = firebase.initializeApp ({
    apiKey: "AIzaSyAGv8EK68fJJPXdtG3O75UF7D7_5TGUElo",
    authDomain: "nh-urban-sport.firebaseapp.com",
    databaseURL: "https://nh-urban-sport.firebaseio.com",
    projectId: "nh-urban-sport",
    storageBucket: "nh-urban-sport.appspot.com",
    messagingSenderId: "7120958805",
    appId: "1:7120958805:web:6ed7bb86b1a9109c"
  });
  
  const getDatabase = () => {
      const myDatabase = app.database();
      console.log('This is the database: ' + myDatabase.ref().toJSON);
      console.log('This is a reference: ' + myDatabase.ref("PLAYER-1").toJSON);
      myDatabase.ref("PLAYER-1").once("value").then(function(snapshot){
          const snapshott = snapshot.val();
          console.log(snapshott);
      });

      myDatabase.ref("").once("value").then(function(snapshot){
        const blank = snapshot.val();
        console.log("This is a blank value" + blank);
        console.log(blank);

    });

      //return database;
  }

  export default getDatabase;
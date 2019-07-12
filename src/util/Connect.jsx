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

  export const getDatabase = () => {
    const myDatabase = app.database();
    return myDatabase;
  };

  export const logDatabase = () => {
    const myDatabase = app.database();
    myDatabase.ref().once('value').then(function(snapshot){
        const databaseSnapshot = snapshot.val();
        console.log(databaseSnapshot);
    });   
  };
  
   
  export const test = () => {  
    console.log(test3());
  }

  export const test3 = () => {  
    let testArray = []

    return test2().then((message) =>{
      for(var m in message){
        testArray.push(message[m].SportName);
      }
      return new Promise((resolve, reject) => {
        resolve(testArray);
      })      
    })
    
  }
 

  const test2 = () => {
    const myDatabase = app.database();
    const sportRef = myDatabase.ref("Sports");
    return sportRef
      .once('value')
      .then((snapshot) => {
        console.log(snapshot.val())
       return snapshot.val();
    })
  }

  
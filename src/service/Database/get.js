import { getDatabase } from "../connect.js";

const database = getDatabase();

export const getActiveSessions = () => {
  return database
    .ref("Sessions")
    .orderByChild('active')
    .equalTo(true)
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
  }).catch((error) => {
      console.log(error)
  });
};

export const getSchedule = sessionId => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .once('value')
    .then((snapshot) => {
      console.log("The schedule returns as", snapshot)
      return snapshot.val();
  }).catch((error) => {
      console.log(error)
  });
};

 
import { getDatabase } from "../connect.js";
import { formatScheduleForContext } from "../../util/helpers.js"
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
      console.error(error)
  });
};

export const getSession = sessionId => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .once('value')
    .then((snapshot) => {
      console.log("The session returns as", snapshot.val())
      const formattedSession = {
        ...snapshot.val(),
        schedule: formatScheduleForContext(snapshot.val().schedule)
      }
      return formattedSession;
  }).catch((error) => {
      console.error(error)
  });
};

export const getSchedule = sessionId => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .once('value')
    .then((snapshot) => {
      console.log("The schedule returns as", snapshot.val())
      return snapshot.val();
  }).catch((error) => {
      console.error(error)
  });
};


 
import { getDatabase } from "../Connect.jsx";

const sessionRef = getDatabase().ref("Schedules");

export const getSchedule = (session) => {
    return sessionRef
      .orderByChild('sessionKey')
      .equalTo(session)
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};
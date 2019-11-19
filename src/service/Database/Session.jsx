import { getDatabase } from "../Connect.jsx";

const sessionRef = getDatabase().ref("Sessions");

export const getActiveSessions = () => {
    return sessionRef
      .orderByChild('active')
      .equalTo(true)
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};
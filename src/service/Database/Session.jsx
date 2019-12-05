import { getDatabase } from "../Connect.jsx";

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


export const getGamesForSession = sessionId => {
    return database
    .ref("Games")
    .orderByChild('sessionKey')
    .equalTo(sessionId)
    .once('value')
    .then((snapshot) => {
        console.log("Games! ", snapshot.val());
    return snapshot.val();
}).catch((error) => {
    console.log(error)
});
}
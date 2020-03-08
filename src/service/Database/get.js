import { getDatabase } from "../Connect.jsx";

const database = getDatabase();

export const getPlayerFriendlyName = (playerId) => {
    return database.ref("Players")
      .orderByKey()
      .equalTo(playerId)
      .once('value')
      .then((snapshot) => {
        let playerObject = snapshot.val();
        let playerFirstName = playerObject[playerId].firstName
        let playerLastName = playerObject[playerId].lastName
        return playerFirstName + " " + playerLastName;
    }).catch((error) => {
        console.log(error)
    });
};

export const getAllTeamsForSession = (sessionKey) => {
  return database
    .ref("Teams")
    .orderByChild('sessionKey')
    .equalTo(sessionKey)
    .once('value')
    .then(function(snapshot) {
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
    return snapshot.val();
  }).catch((error) => {
    console.log(error)
  });
}
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

 
import { getDatabase } from "../Connect.jsx";

const teamsRef = getDatabase().ref("Teams");

export const getAllTeams = () => {
    teamsRef
      .once("value")
      .then(function(snapshot) {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};

export const getAllTeamsForSport = (sportKey) => {
    teamsRef
      .orderByChild('sportKey')
      .equalTo(sportKey)
      .once('value')
      .then(function(snapshot) {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};

export const getAllTeamsForSession = (sessionKey) => {
    return teamsRef
      .orderByChild('sessionKey')
      .equalTo(sessionKey)
      .once('value')
      .then(function(snapshot) {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};

export const getPlayersOnTeam = (teamId) => {
    teamsRef
      .orderByKey()
      .equalTo(teamId)
      .once('value')
      .then(function(snapshot) {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};
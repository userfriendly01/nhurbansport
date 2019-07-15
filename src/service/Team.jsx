import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const playerRef = myDatabase.ref("Teams");

export const getAllTeams = () => {
    playerRef.once("value")
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                return databaseSnapshot;
    });
};

export const getAllTeamsForSport = (sportKey) => {
    return playerRef.orderByChild('sportKey')
             .equalTo(sportKey)
             .once('value')
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                return databaseSnapshot;
    });
};

export const getAllTeamsForSession = (sessionKey) => {
    return playerRef.orderByChild('sessionKey')
             .equalTo(sessionKey)
             .once('value')
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                return databaseSnapshot;
    });
};

const filterTeams = () => {
    //For each sport, find the listed team names and add the sport:teams array to the overall teams object
    let teamsArrayBySport = {};
    getSports().then((sports) => {
      for(var s in sports) {
        const sportName = sports[s].sportName;
        getAllTeamsForSport(s).then((teams) => {
          teamsArrayBySport[sportName] = teams;
        })
      }
      console.log(teamsArrayBySport)
    })
  }
import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const playerRef = myDatabase.ref("Teams");
let returnValues = {};

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


export const getPlayersOnTeam = (teamId) => {
    playerRef.orderByKey()
             .equalTo(teamId)
             .once('value')
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                return databaseSnapshot;
            }).catch((error) => {
            }
    );
};

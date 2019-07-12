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
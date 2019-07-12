import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const playerRef = myDatabase.ref("Teams");

export const getAllTeams = () => {
    playerRef.once("value")
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                console.log(databaseSnapshot);
                return databaseSnapshot;
    });
};

export const getAllTeamsForSport = (sport) => {
    playerRef.once("value")
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                console.log(databaseSnapshot);
                return databaseSnapshot;
    });
};
import { getDatabase } from '../util/Connect.jsx'

export const getAllPlayers = () => {
    const myDatabase = getDatabase();
    myDatabase.ref("Players")
              .once("value")
              .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                console.log(databaseSnapshot);
                return databaseSnapshot;
    });
  };

export const getPlayersOnTeam = () => {
    const myDatabase = getDatabase();
    myDatabase.ref()
              .child('Players')
              .orderByChild('Team')
              .equalTo('PoundTown')
              .once('value')
              .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                console.log(databaseSnapshot);
                return databaseSnapshot;
    });  
}
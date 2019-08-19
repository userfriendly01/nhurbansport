import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const playerRef = myDatabase.ref("Players");

export const getPlayerFriendlyName = (playerId) => {
    return playerRef
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
            })
}

export const getAllPlayers = () => {
    playerRef.once("value")
             .then(function(snapshot) {
                const databaseSnapshot = snapshot.val();
                console.log(JSON.stringify(databaseSnapshot));
                return databaseSnapshot;
    });
};  

export const addPlayer = (id, player) => {
    //Update Teams to hold players instead of players assigned to teams
    playerRef.child(id).set(
        player,
        function(error) {
            if (error) {
                console.log("Add Player: Write Failed");
            } else {
                console.log("Add Player: Write was successful!");
            }
        }
    )        
};

export const deletePlayer = (id) => {
    playerRef.child("-LiZJhf8kb1C_ppD-mNU").remove();
};

export const updatePlayer = (id, field, value) => {
    //Update Teams to hold players instead of players assigned to teams
    playerRef.child(id).set(
        player,
        function(error) {
            if (error) {
                console.log("Add Player: Write Failed");
            } else {
                console.log("Add Player: Write was successful!");
            }
        }
    );        
};
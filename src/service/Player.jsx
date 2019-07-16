import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const playerRef = myDatabase.ref("Players");

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
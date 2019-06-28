import getDatabase from '../util/Connect.jsx'

const getPlayersOnTeam = () => {
    const myDatabase = getDatabase();
    const players = myDatabase.child('FirstName');
    const query = players
                    .orderByChild('Team')
                    .equalTo('PoundTown');

    
    query.on('value', snap => {
        console.log(snap.val());
    });
}

export default getPlayersOnTeam;
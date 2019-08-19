import { getDatabase } from '../util/Connect.jsx'
import { getSportName} from './Sport.jsx'
import { getPlayerFriendlyName } from './Player.jsx'
import { getAllTeamsForSession } from './Team.jsx'

//Establish database connection pointed to Sessions
const myDatabase = getDatabase();
const sessionRef = myDatabase.ref("Sessions");
let returnValues = {
    activeSessions: [
        {
            sessionId: "Test Session Id",
            sessionFriendlyName: "Test Friendly Name",
            sessionTeams: [
                {
                    teamId: "TestId 1",
                    teamName: "Test Pound Town",
                    players: [
                        "Test PoundTown Player 1",
                        "Test PoundTown Player 2"
                    ],
                },
                {
                    teamId: "Test Id 2",
                    teamName: "Test Monstars",
                    players: [
                        "Test Monstars Player 1",
                        "Test Monstars Player 2",
                        "Test Monstars Player 3"
                    ]
                }
            ]
        }
    ]
};

//Get Return Values

export const returnSessionValues = () => {
    return returnValues;
}

export const setEverything = () => {
    getSessions();
    getActiveSessions();
    filterSessions();
}

//Basic CRUD methods

export const getSessions = () => {    
    return sessionRef
            .once('value')
            .then((snapshot) => {
                let sessions = snapshot.val()
                returnValues.sessions = sessions
                return sessions;
            }).catch((error) => {
                console.log(error)    
            })
}

//Custom business logic

export const getActiveSessions = () => {
    return sessionRef
            .orderByChild('active')
            .equalTo(true)
            .once('value')
            .then((snapshot) => {
                let activeSessions = snapshot.val();
                return activeSessions;
            }).catch((error) => {
                console.log(error)
            })
}

export const filterSessionsForRoster = () => {
     return getActiveSessions()
            .then((sessions) => {
                let sessionsArray = [];
                for(let s in sessions) {
                    let sessionObject = {};
                    let startDate = sessions[s].startDate;
                    let sportId = sessions[s].sportKey;
                    let sessionId = s;
                    getSportName(sportId).then((sport) => {
                        sessionObject.sessionId = sessionId;
                        sessionObject.sessionFriendlyName = sport + " " + startDate;
                    });
                    getAllTeamsForSession(sessionId).then((teams) => {
                        let teamsArray = [];
                        for(let t in teams){
                            let teamObject = {};
                            let teamId = t;
                            let playerArray = [];
                            teamObject.teamId = teamId;
                            teamObject.teamName = teams[teamId].teamName;
                            console.log(teams[teamId].players);
                            for(let p in teams[teamId].players){
                                getPlayerFriendlyName(teams[teamId].players[p]).then((player => {
                                    playerArray.push(player)
                                }))
                            }
                            console.log(playerArray)
                            teamObject.players = playerArray;
                            teamsArray.push(teamObject);
                        }
                        sessionObject.sessionTeams = teamsArray;
                    });
                    sessionsArray.push(sessionObject)
                }
                returnValues.activeSessions = sessionsArray;
                console.log(sessionsArray)
                return sessionsArray
    }).catch((error) => {
        console.log(error)
    })
  }
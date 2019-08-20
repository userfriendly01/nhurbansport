import { getDatabase } from '../util/Connect.jsx'
import { getSportName} from './Sport.jsx'
import { getPlayerFriendlyName } from './Player.jsx'
import { getAllTeamsForSession } from './Team.jsx'

//Establish database connection pointed to Sessions
const myDatabase = getDatabase();
const sessionRef = myDatabase.ref("Sessions");
let returnValues = {}

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
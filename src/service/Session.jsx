import { getDatabase } from '../util/Connect.jsx'
import { getSportName} from './Sport.jsx'

//Establish database connection pointed to Sessions
const myDatabase = getDatabase();
const sessionRef = myDatabase.ref("Sessions");
let returnValues = {};

//Get Return Values

export const returnSessionValues = () => {
    //getSessions();
    //getActiveSessions();
    //filterSessions();
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
                returnValues.activeSessions = activeSessions;
                return activeSessions;
            }).catch((error) => {
                console.log(error)
            })
}

export const filterSessions = () => {
     return getActiveSessions()
            .then((sessions) => {
                let sessionsArray = [];
                for(let s in sessions) {
                    let startDate = sessions[s].startDate;
                    let sportId = sessions[s].sportKey;
                    getSportName(sportId).then((sport) => {
                        sessionsArray.push(sport + " " + startDate)
                    });
                }
                returnValues.activeSessionFriendlyNames = sessionsArray;
                return sessionsArray
    }).catch((error) => {
        console.log(error)
    })
  }
import { getDatabase } from '../util/Connect.jsx'
import { getSport } from './Sport.jsx'

//Establish database connection pointed to Sessions
const myDatabase = getDatabase();
const sessionRef = myDatabase.ref("Sessions");
let returnValues = {};
var test;
let sessions = "wasssup";

//Get Return Values

export const returnSessionValues = () => {
    console.log(returnValues)
    setShit();
    console.log(returnValues.activeSessionSnapshot)
    return returnValues;
}

const setShit = () => {
    clean().then((resolved) => {
        console.log(returnValues);
    })
}

//Basic CRUD methods

export const getSessions = () => {    
    return sessionRef
            .once('value')
            .then((snapshot) => {
                console.log(sessions)
                sessions = snapshot.val()
                console.log(sessions)
            }).then((finalReturn) => {
                return finalReturn
            })
}

//Custom business logic

export const getActiveSessions = () => {
    return sessionRef
            .orderByChild('active')
            .equalTo(true)
            .once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
}

const filterSessions = () => {
     return getActiveSessions().then((sessions) => {
      let sessionsArray = [];
      for(var s in sessions){
        let startDate = sessions[s].startDate;
        let sportFriendlyName;
        return getSport(sessions[s].sportKey).then((sport) => {
          for(var x in sport){
            sportFriendlyName = sport[x].sportName
          }
          sessionsArray.push(sportFriendlyName + " " + startDate)
        })
      }
      returnValues.activeSessionFriendlyNames = sessionsArray;
    })
  }

  const clean = () => {
      //get active session
      return getActiveSessions().then((activeSessionSnapshot) => {
          console.log(activeSessionSnapshot)
        returnValues.activeSessionSnapshot = activeSessionSnapshot;
        return activeSessionSnapshot;
      })
        //get the start Date
        //get the sportId

  }
import { 
    getActiveSessions,
    getSportName,
    getAllTeamsForSession
 } from '../../service/Database'

let standings = {};

export const getStandings = () => {
    return standings;
}

export const setStandings = () => {
    getActiveSessions()
      .then((sessions) => {
        let sessionsArray = [];
          for(let s in sessions) {
            let sessionObject = {...sessions[s]};
            let startDate = sessions[s].date;
            let leagueName = sessions[s].name;
            let sessionId = s;
            sessionObject.sessionId = sessionId;
            sessionObject.sessionFriendlyName = leagueName + " " + startDate;
            getAllTeamsForSession(sessionId).then((teams) => {
              let teamsArray = [];
                for(let t in teams){
                  let teamObject = {};
                  let teamId = t;
                  teamObject.teamId = teamId;
                  teamObject.teamName = teams[teamId].teamName;
                  teamObject.teamStats = teams[teamId].stats;
                  teamsArray.push(teamObject);
                };
                sessionObject.sessionTeams = teamsArray;
            });
            sessionsArray.push(sessionObject)
          }
          standings.activeSessions = sessionsArray;
          return sessionsArray
    }).catch((error) => {
        console.log(error)
    })
}
import { 
    getActiveSessions,
    getSportName,
    getPlayerFriendlyName,
    getAllTeamsForSession
 } from '../../service/Database'

let roster = {};

export const getRoster = async () => {
  return roster;
}

export const setRoster = () => {
    getActiveSessions()
      .then((sessions) => {
        let sessionsArray = [];
          for(let s in sessions) {
            let sessionObject = {};
            let leagueName = sessions[s].name
            let startDate = sessions[s].date;
            let sessionId = s;
            sessionObject.sessionFriendlyName = leagueName + " " + startDate;
            sessionObject.sessionId = sessionId;
            getAllTeamsForSession(sessionId).then((teams) => {
              let teamsArray = [];
                for(let t in teams){
                  let teamObject = {};
                  let teamId = t;
                  let playerArray = [];
                  teamObject.teamId = teamId;
                  teamObject.teamName = teams[teamId].teamName;
                  for(let p in teams[teamId].players) {
                    getPlayerFriendlyName(teams[teamId].players[p]).then((player => {
                      playerArray.push(player)
                    })
                  )};
                  teamObject.players = playerArray;
                  teamsArray.push(teamObject);
                };
                sessionObject.sessionTeams = teamsArray;
            });
            sessionsArray.push(sessionObject)
          }
          roster.activeSessions = sessionsArray;
          return sessionsArray
    }).catch((error) => {
        console.log(error)
    })
  }

  // export const setRoster = () => {
  //   getActiveSessions()
  //     .then((sessions) => {
  //       let sessionsArray = [];
  //         for(let s in sessions) {
  //           let sessionObject = {};
  //           let startDate = sessions[s].startDate;
  //           let sportId = sessions[s].sportKey;
  //           let sessionId = s;
  //           getSportName(sportId).then((sport) => {
  //             sessionObject.sessionId = sessionId;
  //             sessionObject.sessionFriendlyName = sport + " " + startDate;
  //           });
  //           getAllTeamsForSession(sessionId).then((teams) => {
  //             let teamsArray = [];
  //               for(let t in teams){
  //                 let teamObject = {};
  //                 let teamId = t;
  //                 let playerArray = [];
  //                 teamObject.teamId = teamId;
  //                 teamObject.teamName = teams[teamId].teamName;
  //                 for(let p in teams[teamId].players) {
  //                   getPlayerFriendlyName(teams[teamId].players[p]).then((player => {
  //                     playerArray.push(player)
  //                   })
  //                 )};
  //                 teamObject.players = playerArray;
  //                 teamsArray.push(teamObject);
  //               };
  //               sessionObject.sessionTeams = teamsArray;
  //           });
  //           sessionsArray.push(sessionObject)
  //         }
  //         roster.activeSessions = sessionsArray;
  //         return sessionsArray
  //   }).catch((error) => {
  //       console.log(error)
  //   })
  // }
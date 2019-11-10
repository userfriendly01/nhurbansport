import { 
  getActiveSessions,
  getPlayerFriendlyName,
  getAllTeamsForSession
} from '../service/Database'
import { getStorage, getDatabase } from "../service/Connect.jsx";
import React, { useState } from 'react';

const StateContext = React.createContext(null);
const storage = getStorage();
const database = getDatabase();

let initialState = {
  imageContext: {
    images: []
  },
  documentContext: {
    howToDocuments: [],
    ruleBooks: []
  },
  leagueContext: {
    leagues: []
  }
};
const StateContextProvider = ({ children }) => {
  const [ state, setState ] = useState(initialState);
  return (
    <StateContext.Provider value={{ state, setState }}>
      <>
        {children}
      </>
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };

export const setLeagueContext = state => {
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
            state.leagueContext.leagues.push(sessionObject)
          };
    }).catch((error) => {
        console.log(error)
    })
}

export const setImageContext = state => {
  storage
    .ref("images")
    .listAll()
    .then(function(result) {
      result.items.forEach(function(imageRef) {
        const imageName = imageRef.name;
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            const imageObject = {};
            imageObject.name = imageName;
            imageObject.url = url;
            state.imageContext.images.push(imageObject);
          })
        });
      }).catch(function(error) {
        console.log(error);
      });
};

export const setDocumentContext = state => {
  const documentsRef = database.ref("Documents");

  documentsRef
    .child("How-To")
    .once("value")
    .then(function(snapshot) {
      let newSnapshot = snapshot.val();
      for(let r in newSnapshot){
        let newObject = {...newSnapshot[r]};
        state.documentContext.howToDocuments.push(newObject);
      };
    });

  documentsRef
    .child("RuleBooks")
    .once("value")
    .then(function(snapshot) {
      let newSnapshot = snapshot.val();
      for(let r in newSnapshot){
        let newObject = {...newSnapshot[r]};
        newObject.show = false;
        state.documentContext.ruleBooks.push(newObject);
      };
    });
}

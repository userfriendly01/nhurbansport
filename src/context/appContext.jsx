import { 
  getActiveSessions,
  getPlayerFriendlyName,
  getAllTeamsForSession
} from '../service/Database'
import { getStorage, getDatabase } from "../service/Connect.jsx";
import React, { useState, useEffect } from 'react';

const StateContext = React.createContext(null);
const storage = getStorage();
const database = getDatabase();

let initialState = {
  imageContext: {
    images: {},
    imageData: {}
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
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const documentPromise = setDocumentContext(state);
    const leaguePromise = setLeagueContext(state, setState);
    const imagePromise = setImageContext(state);

    Promise.all([documentPromise, leaguePromise, imagePromise]).then(() => {
      console.log("Promises have resolved");
      setLoading(false);
    })
  }, []);

  return (
    <> { loading ?
      <StateContext.Provider>
          <>
            {children}
          </>
        </StateContext.Provider>
      : <StateContext.Provider value={{ state, setState }}>
          <>
            {children}
          </>
        </StateContext.Provider>
    } </>
  );
};

export { StateContextProvider, StateContext };

export const setLeagueContext = async state => {
    await getActiveSessions()
      .then((sessions) => {
          for(let s in sessions) {
            let sessionObject = {...sessions[s]};
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

export const setImageContext = async state => {
  await setImages(state);
  await setImageData(state);
};

export const setDocumentContext = async state => {
  await setHowToDocuments(state);
  await setRuleBooks(state);
}

export const setHowToDocuments = async state => {
  await database
    .ref("Documents")
    .child("How-To")
    .once("value")
    .then(snapshot => {
      let newSnapshot = snapshot.val();
      for(let r in newSnapshot){
        let newObject = {...newSnapshot[r]};
        state.documentContext.howToDocuments.push(newObject);
      };
    }).catch(error => {
      console.log(error);
    });
}

export const setRuleBooks = async state => {
  await database
    .ref("Documents")
    .child("RuleBooks")
    .once("value")
    .then(snapshot => {
      let newSnapshot = snapshot.val();
      for(let r in newSnapshot){
        let newObject = {...newSnapshot[r]};
        newObject.show = false;
        state.documentContext.ruleBooks.push(newObject);
      };
    }).catch(error => {
      console.log(error);
    });
}

export const setImages = async state => {
  await storage
    .ref("images")
    .listAll()
    .then(async result => {
      const imageObject = {};
      result.items.forEach(async imageRef => {
        const imageName = imageRef.name;
        const formattedImageName = imageName.substring(0, imageName.length - 4)
        await storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then(async (url) => {
            imageObject[formattedImageName] = url;
          }).catch(error => {
            console.log(error);
          });
        });
        state.imageContext.images = imageObject;
      }).catch(error => {
        console.log(error);
      });
    };

export const setImageData = async state => {
  await database
  .ref("Images")
  .once("value")
  .then(async snapshot => {
    let newSnapshot = snapshot.val();
    state.imageContext.imageData = newSnapshot;
  }).catch((error) => {
    console.log(error);
  });
}

import { 
  getActiveSessions,
  getGamesForSession,
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
  leagueContext: {
    leagues: []
  },
  adminContext: {
    text: [

    ]
  }
};
const StateContextProvider = ({ children }) => {
  const [ state, setState ] = useState(initialState);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const leaguePromise = setLeagueContext(state, setState);
    const imagePromise = setImageContext(state);
    const adminPromise = setAdminContext(state);

    Promise.all([leaguePromise, imagePromise, adminPromise]).then(() => {
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
  //enhance to add schedule for league onto context
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
            getGamesForSession(sessionId).then(games => {
            sessionObject.sessionGames = games;
            });
            state.leagueContext.leagues.push(sessionObject)
          };
    }).catch((error) => {
        console.log(error)
    })
}

export const setAdminContext = async state => {
  //Update the Admin Context to feed Liability waiver and Rulebooks
  await database
    .ref("Admin")
    .child("Text")
    .once("value")
    .then(snapshot => {
      let newSnapshot = snapshot.val();
      state.adminContext.text = newSnapshot;
    }).catch(error => {
      console.log(error);
    });
}

export const setImageContext = async state => {
  await setImages(state);
  await setImageData(state);
};

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

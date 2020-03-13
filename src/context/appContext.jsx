import { 
  getActiveSessions
} from '../service/Database'
import {
  formatTeamsForContext,
  formatScheduleForContext
} from '../util/helpers.js'
import { getStorage, getDatabase } from "../service/connect.js";
import React, { useState, useEffect } from 'react';

const StateContext = React.createContext(null);
const storage = getStorage();
const database = getDatabase();

let initialState = {
  imageContext: {
    images: {},
    imageData: []
  },
  leagueContext: {
    leagues: []
  },
  playerContext: {
    players: []
  },
  adminContext: {
    text: [],
    rulebooks: [],
    liabilityWaiver: [],
    events: []
  }
};
const StateContextProvider = ({ children }) => {
  const [ state, setState ] = useState(initialState);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const leaguePromise = setLeagueContext(state, setState);
    const imagePromise = setImageContext(state);
    const adminPromise = setAdminContext(state);
    const playerPromise = setPlayerContext(state);

    Promise.all([leaguePromise, imagePromise, adminPromise, playerPromise]).then(() => {
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
            let sessionId = s;
            let sessionObject = {...sessions[sessionId]};
            let leagueName = sessions[sessionId].name
            let startDate = sessions[sessionId].date;
            
            sessionObject.sessionFriendlyName = leagueName + " " + startDate;
            sessionObject.sessionId = sessionId;
            let formattedTeams = formatTeamsForContext(sessionObject.teams);
            sessionObject.teams = formattedTeams;
            if (sessionObject.schedule) {
              let formattedSchedule = formatScheduleForContext(sessionObject.schedule);
              sessionObject.schedule = formattedSchedule;
            }
            state.leagueContext.leagues.push(sessionObject)
          };
    }).catch((error) => {
        console.error(error)
    })
}

export const setPlayerContext = async state => {
  await database
    .ref("Players")
    .once("value")
    .then(snapshot => {
      let players = snapshot.val();
      for (let p in players) {
        let playerObject = {...players[p]};
        playerObject.playerId = p;
        state.playerContext.players.push(playerObject);
      }
    }).catch(error => {
      console.error("Failed to Load Player Context. ", error)
    })
}

export const setAdminContext = async state => {
  await database
    .ref("Admin")
    .child("Text")
    .once("value")
    .then(snapshot => {
      let newSnapshot = snapshot.val();
      state.adminContext.text = newSnapshot;
    }).catch(error => {
      console.error("Failed to Load Admin Text to Context. ", error)
    });

    await database
    .ref("Admin")
    .child("Rulebooks")
    .once("value")
    .then(snapshot => {
      let rulebooks = snapshot.val();
      for(let r in rulebooks) {
        let rulebookObject = {
          ...rulebooks[r],
          rulebookId: r
        }
        state.adminContext.rulebooks.push(rulebookObject);
      }
    }).catch(error => {
      console.error("Failed to Load Rulebooks to Context. ", error)
    });

    await database
    .ref("Admin")
    .child("Events")
    .once("value")
    .then(snapshot => {
      let events = snapshot.val();
      for(let e in events) {
        let eventsObject = {
          ...events[e],
          eventId: e
        }
        state.adminContext.events.push(eventsObject);
      }
    }).catch(error => {
      console.error("Failed to Load Events to Context. ", error)
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
            console.error(error);
          });
        });
        state.imageContext.images = imageObject;
      }).catch(error => {
        console.error("Failed to Load Images from Storage to Context. ", error)
      });
    };

export const setImageData = async state => {
  await database
  .ref("Images")
  .once("value")
  .then(async snapshot => {
    let images = snapshot.val();
      for(let i in images) {
        let imageObject = {
          imageId: i,
          url: images[i]
        }
        state.imageContext.imageData.push(imageObject);
      }
  }).catch((error) => {
    console.error("Failed to Load Images from Database to Context. ", error)
  });
}

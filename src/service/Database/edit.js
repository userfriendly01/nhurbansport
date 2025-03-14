import { getDatabase } from "../connect.js";
import { formatScheduleForDatabase } from "../../util/helpers.js"

const database = getDatabase();

export const updateRulebook = (id, editedRulebook) => {
  return database
    .ref("Admin")
    .child("Rulebooks")
    .child(id)
    .set(editedRulebook).then(() => {
      const rulebooks = context.state.adminContext.rulebooks
      const index = rulebooks.map(rulebook => { return rulebook.rulebookId; }).indexOf(id);
      rulebooks.splice(index, 1);
      rulebooks.splice(index, 0, editedRulebook);
      context.setState({
        ...context.state,
        adminContext: {
          ...context.state.adminContext,
          rulebooks
        }
      });
      console.log("Updated Rulebook!", editedRulebook)
      return true;
    }).catch(error => {
      console.error("Failed to update rulebook.", error)
    });
}

export const updateAdminText = (id, editedText, context) => {
  return database
    .ref("Admin")
    .child("Text")
    .child(id).set(editedText).then(() => {
        context.setState({
          ...context.state,
          adminContext: {
            ...context.state.adminContext,
            text: {
              ...context.state.adminContext.text,
              [id]: editedText
            }
          }
        });
        console.log("Updated text!");
        return true;
    })
    .catch(error => {
      console.error("Failed to update text.", error)
    });
};

export const updateImageData = (id, url, context) => {
  return database
    .ref('Images/' + id)
    .set(url)
    .then(()=> {
      const images = context.state.imageContext.imageData
      const index = images.map(image => { return image.imageId; }).indexOf(id);
      const editedImageObject = {
        imageId: id,
        url
      }
      images.splice(index, 1);
      images.splice(index, 0, editedImageObject);
      context.setState({
        ...context.state,
        imageContext: {
          ...context.state.imageContext,
          imageData: images
        }
      });
      return true;
    }).catch(error => {
      console.error("Failed to update image. ", error)
    });
}

export const updateSession = (id, session, context) => {
    let editedSession = {};
    if(session.schedule){
      editedSession = {
        ...session,
        schedule: formatScheduleForDatabase(session.schedule)
      }
    }else {
      editedSession = session;
    }
  return database
    .ref("Sessions")
    .child(id)
    .set(editedSession).then(() => {
      const sessions = context.state.leagueContext.leagues
      const index = sessions.map(session => { return session.sessionId; }).indexOf(id);
      sessions.splice(index, 1);
      sessions.splice(index, 0, session);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues: sessions
        }
      });
      console.log("Updated Session!", editedSession)
      return true;
    }).catch(error => {
      console.error("Failed to update session. ", error)
    });
}

export const updateTeam = (sessionId, teamId, editedTeam, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("teams")
    .child(teamId)
    .push(editedTeam).then(snapshot => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const teams = league.teams ? league.teams : [];
      const teamIndex = leagues.map(team => { return team.teamId; }).indexOf(teamId);
      teams.splice(teamIndex, 1);
      teams.splice(teamIndex, 0, editedTeam);
      league.teams = teams;

      const leagueIndex = leagues.map(league => { return league.sessionId; }).indexOf(sessionId);
      leagues.splice(leagueIndex, 1);
      leagues.splice(leagueIndex, 0, league);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Updated Team! ", editedTeam);
      return snapshot.key;
    }).catch(error => {
      console.error("Failed to update Team. ", error);
    });
}
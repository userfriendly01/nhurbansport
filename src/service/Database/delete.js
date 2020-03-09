import { getDatabase } from "../Connect.jsx";

const database = getDatabase();

export const deleteRulebook = id => {
  return database
    .ref("Admin")
    .child(id)
    .remove().then(removedRulebook => {
      return removedRulebook.val();
    }).catch(error => {
      console.error("Failed to delete Rulebook. ", error);
    });
}

export const deleteSession = id => {
  return database
    .ref("Sessions")
    .child(id)
    .remove().then(removedSession => {
      return removedSession.val();
    }).catch(error => {
      console.error("Failed to delete Session. ", error);
    });
}

export const deleteTeam = (sessionId, teamId) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("teams")
    .child(teamId)
    .remove().then(removedTeam => {
      console.log(removedTeam);
      return true;
    }).catch(error => {
      console.error("Failed to delete Session. ", error);
    });
}
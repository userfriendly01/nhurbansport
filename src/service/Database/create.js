import { getDatabase } from "../Connect.jsx";

const database = getDatabase();

export const createRulebook = newRulebook => {
  return database
    .ref("Admin")
    .child("Rulebooks")
    .push(newRulebook).then(rulebookSnapshot => {
      return rulebookSnapshot.val();
    }).catch(error => {
      console.error("Failed to Create Rulebook. ", error);
    });
}

export const createSession = newSession => {
  return database
    .ref("Sessions")
    .push(newSession).then(sessionSnapshot => {
      return sessionSnapshot.val();
    }).catch(error => {
      console.error("Failed to Create Session. ", error);
    });
}

export const createTeam = (sessionId, newTeam) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("teams")
    .push(newTeam).then(teamSnapshot => {
      return teamSnapshot.val();
    }).catch(error => {
      console.error("Failed to Create Team. ", error);
    });
}
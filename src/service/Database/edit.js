import { getDatabase } from "../Connect.jsx";

const database = getDatabase();

export const updateRulebook = (id, updatedRulebook) => {
  return database
    .ref("Admin")
    .child("Rulebooks")
    .child(id)
    .set(updatedRulebook).then(updatedRulebook => {
      return updatedRulebook.val();
    }).catch(error => {
      console.error("Failed to update rulebook.", error)
    });
}

export const updateSession = (id, updatedSession) => {
  return database
    .ref("Sessions")
    .child(id)
    .set(updatedSession).then(updatedSession => {
      return updatedSession.val();
    }).catch(error => {
      console.error("Failed to update session. ", error)
    });
}

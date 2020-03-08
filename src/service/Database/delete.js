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
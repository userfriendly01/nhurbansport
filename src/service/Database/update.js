import { getDatabase } from "../Connect.jsx";

const database = getDatabase();

export const updateAdminText = (id, updatedText, updateAdminContext) => {
  database
  .ref("Admin")
  .child("Text")
  .child(id).set(updatedText).then(() => {
    updateAdminContext();
  })
  .catch(error => {
    console.log(error);
  });
};

export const updateLeague = (id, updatedSession) => {
  sessionsRef.child(id).set(updatedSession);
}

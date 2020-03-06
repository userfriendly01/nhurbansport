import { getDatabase } from "../../service/Connect.jsx";

const rulebooksRef = getDatabase().ref("Admin").child("Rulebooks");

export const createRulebook = newRulebook => {
  rulebooksRef.push(newRulebook);
}

// export const editLeague = (id, updatedSession) => {
//   sessionsRef.child(id).set(updatedSession);
// }

// export const deleteLeague = id => {
//   sessionsRef.child(id).remove();
// }
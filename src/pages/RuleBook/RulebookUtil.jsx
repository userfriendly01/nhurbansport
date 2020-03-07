import { getDatabase } from "../../service/Connect.jsx";

const rulebooksRef = getDatabase().ref("Admin").child("Rulebooks");

export const createRulebook = newRulebook => {
  return rulebooksRef.push(newRulebook);
}

export const editRulebook = (id, updatedRulebook) => {
  return rulebooksRef.child(id).set(updatedRulebook);
}

export const deleteRulebook = id => {
  return rulebooksRef.child(id).remove();
}
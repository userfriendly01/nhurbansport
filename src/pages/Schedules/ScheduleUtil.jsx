import { getDatabase } from "../../service/Connect.jsx";

const sessionsRef = getDatabase().ref("Sessions");

export const createSchedule = newRulebook => {
  return rulebooksRef.push(newRulebook);
}

export const editRulebook = (id, updatedRulebook) => {
  return rulebooksRef.child(id).set(updatedRulebook);
}

export const deleteRulebook = id => {
  return rulebooksRef.child(id).remove();
}
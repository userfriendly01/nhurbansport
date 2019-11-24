import { getDatabase } from "../../service/Connect.jsx";

const sessionsRef = getDatabase().ref("Sessions");

let roster = {};

export const getLeagues = async () => {
  return roster;
}

export const setLeagues = () => {

}

export const createLeague = newSession => {
  sessionsRef.push(newSession);
}

export const editLeague = (id, updatedSession) => {
  sessionsRef.child(id).set(updatedSession);
}

export const deleteLeague = id => {
  sessionsRef.child(id).remove();
}
import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const sessionRef = myDatabase.ref("Sessions");

export const getSessions = () => {
    return sessionRef
            .once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
}

export const getActiveSessions = () => {
    //Can I say only return sessions where active is true
    return sessionRef
            .orderByChild('active')
            .equalTo(true)
            .once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
}

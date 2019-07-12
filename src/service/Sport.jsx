import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const sportRef = myDatabase.ref("Sports");

export const getSports = () => {
    return sportRef
            .once('value')
            .then((snapshot) => {
                console.log("getSports was run")
                return snapshot.val();
            })
}

export const getSport = (sport) => {
    return sportRef
            .orderByKey()
            .equalTo(sport)
            .once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
}


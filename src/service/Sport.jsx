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

export const getSport = (sportId) => {
    return sportRef
            .orderByKey()
            .equalTo(sportId)
            .once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
}

export const getSportName = (sportId) => {
    return sportRef
            .orderByKey()
            .equalTo(sportId)
            .once('value')
            .then((snapshot) => {
                let sportObject = snapshot.val();
                let sportName = sportObject[sportId].sportName
                return sportName;
            }).catch((error) => {
                console.log(error)
            })
}

import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const sportRef = myDatabase.ref("Sports");

export const getSports = () => {
    return sportRef
            .once('value')
            .then((snapshot) => {
                console.log(snapshot.val())
                return snapshot.val();
            })
}

export const getSportNameArray = () => {
    let sportNames = []
    return getSports().then((data) => {
        for(var d in data){
            sportNames.push(data[d].SportName);
          }
        return new Promise((resolve, reject) => {
        resolve(sportNames);
        })
    })
}
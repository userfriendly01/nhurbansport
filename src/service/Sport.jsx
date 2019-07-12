import { getDatabase } from '../util/Connect.jsx'

const myDatabase = getDatabase();
const sportRef = myDatabase.ref("Sports");

export const getSports = () => {
    return sportRef.orderByChild('SportName')
                .once('value')
                .then(function(snapshot) {
            return snapshot.val();
    });
}

export const getSportNameArray = () => {
    let sports;
    let sportNames = [];
    let keys = getKeyArray();
    getSports().then((sportData) => {
        sports = sportData;
    })
    
    // for(var x of keys) {
    //     sportNames.push(sports[x].SportName);
    //     console.log(sportNames);
    // }
    return sportNames;
}

export const getKeyArray = () => {
    const keyArray = [];
    return sportRef.orderByChild('SportName')
        .once('value')
        .then((snapshot) => {
       return snapshot.key;
    })
}
import { getDatabase } from "../Connect.jsx";

const sportRef = getDatabase().ref("Sports");

export const getSports = () => {
    sportRef
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};

export const getSport = (sportId) => {
    sportRef
      .orderByKey()
      .equalTo(sportId)
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};

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
    });
};
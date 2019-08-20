import { getDatabase } from "../Connect.jsx";

const sessionRef = getDatabase().ref("Sessions");

// export const getSessions = () => {    
//     sessionRef
//       .once('value')
//       .then((snapshot) => {
//         let sessions = snapshot.val()
//         returnValues.sessions = sessions
//         return sessions;
//     }).catch((error) => {
//         console.log(error)    
//     });
// };

export const getActiveSessions = () => {
    return sessionRef
      .orderByChild('active')
      .equalTo(true)
      .once('value')
      .then((snapshot) => {
          console.log(snapshot.val())
        return snapshot.val();
    }).catch((error) => {
        console.log(error)
    });
};
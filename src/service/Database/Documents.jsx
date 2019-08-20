import { getDatabase } from "../Connect.jsx";

const documentsRef = getDatabase().ref("Documents");

let howToObject = []
let rulebooks = []

export const getHowToDocuments = () => {
    return howToObject;
};
  
export const getRuleBooks = () => {
    return rulebooks;
};

export const setHowToDocuments = () => {
    documentsRef
      .child("How-To")
      .once("value")
      .then(function(snapshot) {
        howToObject = snapshot.val();
      });
    return howToObject;
  };
  
  export const setRuleBooks = () => {
    documentsRef
      .child("RuleBooks")
      .once("value")
      .then(function(snapshot) {
        let newSnapshot = snapshot.val();
        for(let r in newSnapshot){
          let newObject = {...newSnapshot[r]};
          newObject.show = false;
          rulebooks.push(newObject)
        };
      });
    return rulebooks;
  };
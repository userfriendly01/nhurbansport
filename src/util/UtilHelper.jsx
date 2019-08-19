import { filterSessionsForRoster } from '../service/Session.jsx'
import { getStorage, getDatabase } from './Connect.jsx'

const imageArray = []
let howToObject = []
let rulebooks = []

export const setData = () => {
    filterSessionsForRoster();
    setAllImages();
    setHowToDocuments();
    setRuleBooks();
}

export const getAllImages = () => {
  return imageArray;
};

export const getHowToDocuments = () => {
  return howToObject;
};

export const getRuleBooks = () => {
  return rulebooks;
};

export const setHowToDocuments = () => {
  getDatabase()
  .ref("Documents")
  .child("How-To")
  .once("value")
  .then(function(snapshot) {
    howToObject = snapshot.val();
  })
  return howToObject;
}

export const setRuleBooks = () => {
  getDatabase()
  .ref("Documents")
  .child("RuleBooks")
  .once("value")
  .then(function(snapshot) {
    let newSnapshot = snapshot.val();
    for(let r in newSnapshot){
      let newObject = {...newSnapshot[r]};
      newObject.show = false;
      rulebooks.push(newObject)
    }
  })
  return rulebooks;
}

export const setAllImages = () => {
    getStorage()
      .ref("images")
      .listAll()
      .then(function(result) {
        result.items.forEach(function(imageRef) {
          const imageName = imageRef.name;
          getStorage()
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            imageArray.push(url);
          })
        });
      }).catch(function(error) {
        console.log(error);
      });
      return imageArray
}

export const uploadImage = (image) => {
  return getStorage()
          .ref(`images/${image.name}`)
          .put(image)
          .then((uploadTask) => {
            return uploadTask.metadata.name
          })
}

//LEFT OFF = sending the right link to get the download but recieve a 404 and that it's read only
export const downloadImage = (imageId) => {
  return getStorage()
    .ref()
    .child(`images/${imageId}`)
    .getDownloadURL()
    .then((url) => {
      console.log(url)
      return url;
    }).catch((error) => {
      downloadUrl = null
      console.log(error)
    })
}



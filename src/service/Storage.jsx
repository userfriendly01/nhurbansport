import { getStorage } from "./Connect.jsx";

const myStorageBucket = getStorage();
const imageArray = []


export const getAllImages = () => {
    return imageArray;
};

export const setAllImages = () => {
  myStorageBucket
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
};

export const uploadImage = (image) => {
  return myStorageBucket
          .ref(`images/${image.name}`)
          .put(image)
          .then((uploadTask) => {
            return uploadTask.metadata.name
          })
}

//LEFT OFF = sending the right link to get the download but recieve a 404 and that it's read only
export const downloadImage = (imageId) => {
  return myStorageBucket
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
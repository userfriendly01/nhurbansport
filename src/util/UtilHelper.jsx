import { filterSessionsForRoster } from '../service/Session.jsx'
import { getStorage } from './Connect.jsx'

const imageArray = []

export const setData = () => {
    filterSessionsForRoster();
    setAllImages();
}

export const getAllImages = () => {
  return imageArray;
};

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



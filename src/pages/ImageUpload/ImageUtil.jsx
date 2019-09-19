import { getStorage } from "../../service/Connect.jsx";

const storage = getStorage();
const myStorageBucket = getStorage();
const imageArray = []


export const getAllImages = () => {
    return imageArray;
};

export const setAllImages = () => {
  return myStorageBucket
    .ref("images")
    .listAll()
    .then(function(result) {
      console.log(result)
      result.items.forEach(function(imageRef) {
        const imageName = imageRef.name;
        getStorage()
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            const imageObject = {};
            imageObject.name = imageName;
            imageObject.url = url;
            imageArray.push(imageObject);
          })
        });
      }).catch(function(error) {
        console.log(error);
      });
};

export const uploadImage = ({ 
    temporaryImage,
    setProgress,
    imageArray,
    setImageArray,
    imageDetails,
    setImageDetails
  }) => {

  const uploadTask = storage.ref(`images/${temporaryImage.name}`).put(temporaryImage);
  uploadTask.on('state_changed',
  (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progress)
  },
  (error) => {
      console.log(error);
  },
  () => {
      storage.ref('images').child(temporaryImage.name).getDownloadURL().then(url => {
        setImageDetails({
          ...imageDetails,
          url: url
      });
          const newImageArray = [
              ...imageArray,
              { name: temporaryImage.name,
                url: url
              }
          ]
          setImageArray(newImageArray)
          setProgress(0);
      })  
  });
}
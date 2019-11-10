import { getStorage, getDatabase } from "../../service/Connect.jsx";

const storage = getStorage();
const database = getDatabase();
const imageArray = []
const imageObject = {}

console.log("I'm just the obj ",imageArray)
export const getAllImages = () => {
    return imageArray;
};

export const getImageObject = () => {
  return database.ref("Images")
  .once("value")
  .then(function(snapshot) {
    let newSnapshot = snapshot.val();
        for(let r in newSnapshot) {
          imageObject[r] = newSnapshot[r]
        };
      console.log("IMAGE OBJECT",imageObject)
  }).catch((error) => {
    console.log(error);
  });

}

export const getImage = (name) => {
  return imageObject[name];
}

export const setImage = ({
  name,
  url,
  setCompleted
}) => {
  database.ref('Images/' + name).set(url).then(()=> {
    getImageObject().then(() => {
      setCompleted(true);
    })
  })
}

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
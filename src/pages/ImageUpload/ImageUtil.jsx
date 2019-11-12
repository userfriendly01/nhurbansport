import { getStorage, getDatabase } from "../../service/Connect.jsx";

const storage = getStorage();
const database = getDatabase();

export const setImage = ({
  name,
  url,
  setCompleted
}) => {
  //Get the image object from the uploaded name and re-upload it with the new name

  console.log("What type of Object is the Ref?: ", storage.ref('Images/Nature Background*'))
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
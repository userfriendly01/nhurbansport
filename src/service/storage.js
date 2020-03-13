import { getStorage } from "./connect.js";

const storage = getStorage();

export const uploadImage = ({ 
    temporaryImage,
    imageArray,
    setImageArray,
    imageDetails,
    setImageDetails
  }) => {

  const uploadTask = storage.ref(`images/${temporaryImage.name}`).put(temporaryImage.file);
  uploadTask.on('state_changed',
  null,
  (error) => {
      console.error(error);
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
      })  
  });
}
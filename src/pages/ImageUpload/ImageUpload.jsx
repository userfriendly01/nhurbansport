import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Wrapper } from '../../components'
import ImagePagination  from '../ImageUpload/ImagePagination.jsx'
import { uploadImage } from "../../service/storage.js"
import { updateImageData } from "../../service/Database"
import { StateContext } from '../../context/appContext.jsx'

const ImageUpload = ({ location } ) => {
  const context = useContext(StateContext);
  const form = location.state.form ? location.state.form : false;
  const saveButtonText = location.state.button ? location.state.button : "Update Image";

  const [ completed, setCompleted ] = useState(false);
  const [ images, setImages ] = useState(context.state.imageContext.imageData);
  const [ imageDetails, setImageDetails ] = useState({
      url: location.state.url,
      name: location.state.name,
      height: location.state.height,
      width: location.state.width
  });
  const [ temporaryImage, setTemporaryImage ] = useState({
      file: null,
      name: null,
      preview: null
  });
    
  const handleChange = e => {
    const reader = new FileReader();
  
    if (e.target.files[0]) {
      const tempImage = e.target.files[0];
      reader.onloadend = () => {
        setTemporaryImage({
          file: tempImage,
          name: imageDetails.name,
          preview: reader.result
        })
      }
        reader.readAsDataURL(tempImage);
    }
  }

  const handleUpload = () => {
      const obj = {
          temporaryImage,
          images, 
          setImages,
          imageDetails,
          setImageDetails
      };
      uploadImage(obj);
  }
  
  const imageCallback = (childData) => {
      setImageDetails({
          ...imageDetails,
          url: childData
      });
  }

  const updateImageSource = () => {
    if (form) {
      const attachImageToForm = location.state.setForm;
      attachImageToForm(imageDetails.url);
    } else {
      updateImageData(imageDetails.name, imageDetails.url, context).then(() => {
        setCompleted(true)
      });
    }   
  }

  return (
    <div>
      {
        completed && !form ?
        <Redirect to={history.go(-1)} />
        :
        <Wrapper direction="column" align="center">
            <img src={imageDetails.url} height={imageDetails.height} width={imageDetails.width}/>
            <Wrapper align="center">
              <h4>Upload a new file:</h4>
            <input type="file" onChange={handleChange} style={{width:"100px", margin:"10px"}}/>
            {
              temporaryImage.file != null ?
                <button onClick={() => handleUpload()}>Upload</button>
              : null
            }
          </Wrapper>
          { imageDetails.url !== location.state.url ?
              <button onClick={() => updateImageSource()}>{saveButtonText}</button>           
            : null
          }
          <h4>Or Select an Existing Image</h4>
          <ImagePagination array={images} parentCallBack={imageCallback} />
          
        </Wrapper>
      }
    </div>
  )
}

export default ImageUpload;
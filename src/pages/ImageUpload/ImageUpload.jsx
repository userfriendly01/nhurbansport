import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Wrapper } from '../../components'
import { 
    ImagePagination,
    uploadImage,
    setImage 
} from '../ImageUpload'
import { StateContext } from '../../context/appContext.jsx'

const ImageUpload = ({ location } ) => {
    const [ imageDetails, setImageDetails ] = useState({
        url: location.state.url,
        name: location.state.name,
        height: location.state.height,
        width: location.state.width
    });

    const context = useContext(StateContext);
    const createImageArray = () => {
      const tempImageArray = [];
      const images = context.state.imageContext.images;
      for (const i in images) {
        const imageObject = {
          name: i,
          url: images[i]
        }
        tempImageArray.push(imageObject)
      };
      return tempImageArray;
    };
    const [ imageArray, setImageArray ] = useState(createImageArray());
    const [ temporaryImage, setTemporaryImage ] = useState({
        file: null,
        name: null,
        preview: null
    });
    const [ completed, setCompleted ] = useState(false);
    const form = location.state.form == null ? false : true;

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
            imageArray, 
            setImageArray,
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
      console.log("What's the Form? ",form);
      if (form) {
        const attachImage = location.state.callbackFunction;
        attachImage(imageDetails.url);
      } else {
        setImage({
          name: imageDetails.name,
          url: imageDetails.url,
          updateStateAndReturn
      });
      }   
    }

    const updateStateAndReturn = () => {
      context.setState({
        ...context.state,
        imageContext: {
          ...context.state.imageContext,
          imageData: {
            ...context.state.imageContext.imageData,
            [imageDetails.name]: imageDetails.url
          }
        }
      });
      setCompleted(true);
    }

  return (
    <div>
      {
        completed && !form ?
        //<Redirect to={history.go(-1)} />
        console.log("I tried to redirect")
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
                <button onClick={() => updateImageSource()}>Save New Image</button>
              : null
          }
          <h4>Or Select an Existing Image</h4>
          <ImagePagination array={imageArray} parentCallBack={imageCallback} />
          
        </Wrapper>
      }
    </div>
  )
}

export default ImageUpload;
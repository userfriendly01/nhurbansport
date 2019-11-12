import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { 
    Container,
    Image,
} from '../../components'
import { 
    ImagePagination,
    uploadImage,
    setImage 
} from '../ImageUpload'
import { StateContext } from '../../context/appContext.jsx'

const ImageUpload = ({ location, callbackFunction } ) => {
    const replacedImageName = location.state.name;
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
        preview: null
    });
    const [ progress, setProgress ] = useState(0);
    const [ completed, setCompleted ] = useState(false);
    const redirect = location.state.redirect == null ? true : false;

    const handleChange = e => {
        const reader = new FileReader();
      
        if (e.target.files[0]) {
          const tempImage = e.target.files[0];
      
          reader.onloadend = () => {
            setTemporaryImage({
              file: tempImage.file,
              preview: reader.result
            })
          }
            reader.readAsDataURL(tempImage);
        }
      }

    const handleUpload = () => {
        const obj = {
            temporaryImage, 
            setProgress, 
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
      console.log("Do I have the right stuff ",imageDetails)
        setImage({
            name: imageDetails.name,
            url: imageDetails.url,
            setCompleted
        });
        // callbackFunction(imageDetails.url);
    }
    console.log(completed, redirect, location.state.redirect);

    return (
        <div>
        {
          completed && redirect ?
            <Redirect to={history.go(-1)} />
          :
            <Container direction= "row" align="center">
              <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
                {replacedImageName}
                  <Image url={imageDetails.url} height={imageDetails.height} width={imageDetails.width} margin="20"/>
                  <progress value={progress} max="100"/>
                  <input type="file" onChange={handleChange}/>
                  {
                    temporaryImage != null ?
                        <button onClick={() => handleUpload()}>Upload</button>
                    : null
                  }
                <button onClick={() => updateImageSource()}>Change Image</button>
              </Container>
            <Container direction="row" wrap="wrap">
              <ImagePagination array={imageArray} parentCallBack={imageCallback} />
            </Container>
        </Container>
      }
    </div>
  )
}

export default ImageUpload;
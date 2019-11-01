import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { 
    Container,
    Image,
} from '../../components'
import { 
    ImagePagination,
    getAllImages, 
    uploadImage,
    setImage 
} from '../ImageUpload'

const ImageUpload = ({ location }) => {
    const replacedImageName = location.state.name;
    const [ imageDetails, setImageDetails ] = useState({
        url: location.state.url,
        name: location.state.name,
        height: location.state.height,
        width: location.state.width
    });

    const [ imageArray, setImageArray ] = useState(getAllImages());
    const [ temporaryImage, setTemporaryImage ] = useState({
        file: null,
        preview: null
    });
    const [ progress, setProgress ] = useState(0);
    const [ completed, setCompleted ] = useState(false);

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
    
    const callbackFunction = (childData) => {
        setImageDetails({
            ...imageDetails,
            url: childData
        });
    }

    const updateImageSource = () => {
        setImage({
            name: imageDetails.name,
            url: imageDetails.url,
            setCompleted
        })
    }

    return (
        <div>
        {
        !completed ?
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
                <ImagePagination array={imageArray} parentCallBack={callbackFunction} />
            </Container>
        </Container>
        : 
        <Redirect to={history.go(-1)} />
        
    }
    </div>
    )
}

export default ImageUpload;
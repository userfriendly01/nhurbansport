import React, { useState } from 'react'
import { 
    Container,
    Image,
} from '../../components'
import { 
    ImagePagination,
    getAllImages, 
    uploadImage,  
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
    const [ temporaryImage, setTemporaryImage ] = useState(null)
    const [ progress, setProgress ] = useState(0)

    const handleChange = e => {
        if (e.target.files[0]) {
            const tempImage = e.target.files[0];
            setTemporaryImage(() => (tempImage));
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

    }

    return (
        <Container direction= "row" align="center">
            <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
                {replacedImageName}
                <Image url={imageDetails.url} height={imageDetails.height} width={imageDetails.width} margin="20"/>
                <progress value={progress} max="100"/>
                <input type="file" onChange={handleChange}/>
                {temporaryImage != null ?
                    <button onClick={() => handleUpload()}>Upload</button>
                    : null
                }
            </Container>
            <Container direction="row" wrap="wrap">
                <ImagePagination array={imageArray} parentCallBack={callbackFunction} />
            </Container>
        </Container>
    )
}

export default ImageUpload;
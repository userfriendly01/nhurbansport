import React, { useState, useContext, useEffect } from 'react'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import { getAllImages, setAllImages } from '../../service/Storage.jsx'
import { getStorage } from '../../service/Connect.jsx';
import ImagePagination from './ImagePagination.jsx'


const ImageUpload = ({ location }) => {
    const replacedImageName = location.state.name;
    const [ imageDetails, setImageDetails ] = useState({
        url: location.state.url,
        name: location.state.name,
        height: location.state.height,
        width: location.state.width
    });

    const [ imageArray, setImageArray ] = useState(getAllImages());
    const [ image, setImage ] = useState(null)
    const [ url, setUrl ] = useState('')
    const [ progress, setProgress ] = useState(0)
    const storage = getStorage();

    const handleChange = e => {
        if (e.target.files[0]) {
            const tempImage = e.target.files[0];
            setImage(() => (tempImage));
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress)
        },
        (error) => {
            console.log(error);
        },
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                setUrl(url);
                const newImageArray = [
                    ...imageArray,
                    { name: image.name,
                      url: url
                    }
                ]
                setImageArray(newImageArray)
            })  
        });
    }

    
    const callbackFunction = (childData) => {
        setImageDetails({
            ...imageDetails,
            url: childData
        });
        console.log(imageDetails)
    }

    return (
        <Container direction= "row" align="center">
            <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
                {replacedImageName}
                <Image url={imageDetails.url} height={imageDetails.height} width={imageDetails.width} margin="20"/>
                <progress value={progress} max="100"/>
                <input type="file" onChange={handleChange}/>
                <button onClick={() => handleUpload()}>Upload</button>
            </Container>
            <Container direction="row" wrap="wrap">
                <ImagePagination array={imageArray} parentCallBack={callbackFunction} />
            </Container>
        </Container>
    )
}

export default ImageUpload;
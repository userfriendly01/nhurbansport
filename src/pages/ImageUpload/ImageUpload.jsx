import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container.jsx'
import { getAllImages, setAllImages } from '../../service/Storage.jsx'
import { getStorage } from '../../service/Connect.jsx';
import Pages from '../../util/Hooks/Pages.jsx'

const ImageUpload = () => {
    const imagesPerPage = 8;
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

    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
        <Container direction= "column">
            <Container direction="row" wrap="wrap">
                <Pages array={imageArray} itemsPerPage={imagesPerPage} />
            </Container>
            <div style={style}>
                <progress value={progress} max="100"/>
                <br/>
                <input type="file" onChange={handleChange}/>
                <button onClick={() => handleUpload()}>Upload</button>
                <br/>
                <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
            </div>
        </Container>
    )
}

export default ImageUpload;
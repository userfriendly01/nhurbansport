import React, { useState } from 'react';
import { getStorage } from '../service/Connect.jsx';
import { getAllImages, setAllImages } from '../service/Storage.jsx'
import Container from '../components/Container.jsx'
import styled from 'styled-components'

const testUpload = () => { 
    const [ image, setImage ] = useState(null)
    const [ url, setUrl ] = useState('')
    const [ progress, setProgress ] = useState(0)
    const storage = getStorage();
 
    const handleChange = e => {
        console.log(e)
        if (e.target.files[0]) {
            const tempImage = e.target.files[0];
            setImage(() => (tempImage));
        }
    }

    const handleUpload = () => {
        console.log(image)
        console.log(image.name)
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress)
        },
        (error) => {
            console.log(error);
        },
        () => {
          // complete function ....
            // storage.ref('images').child(image.name).getDownloadURL().then(url => {
            // console.log("I've finished and am going to reset the images!");
            // //setUrl(url);
            // setAllImages()
            // })  
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
      <div style={style}>
      <progress value={progress} max="100"/>
      <br/>
        <input type="file" onChange={handleChange}/>
        <button onClick={() => handleUpload()}>Upload</button>
        <br/>
        <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>
    )
}

export default testUpload;
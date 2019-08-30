import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container.jsx'
import { getAllImages, setAllImages } from '../../service/Storage.jsx'
import { getStorage } from '../../service/Connect.jsx';
import ImagePagination from './ImagePagination.jsx'

const ImageUpload = () => {
    const imagesPerPage = 10;
    const [ imageArray, setImageArray ] = useState(getAllImages());
    const [ image, setImage ] = useState(null)
    const [ url, setUrl ] = useState('')
    const [ progress, setProgress ] = useState(0)
    const storage = getStorage();
    const [ start, setStart ] = useState(1)
    const [ end, setEnd ] = useState(imagesPerPage)
    const [ pageSelected, setPageSelected] = useState(1)

    useEffect(() => {
        if(pageSelected * imagesPerPage > imageArray.length){
            setEnd((((pageSelected-1) * imagesPerPage) + (imageArray.length % imagesPerPage)))
        } else {
            setEnd(pageSelected * imagesPerPage)
        }
        setStart(((pageSelected - 1) * imagesPerPage) + 1)
    }, [imageArray, pageSelected])
 
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

    const ExistingImage = styled.img`
        background-size: 100% 100%;
        width: 150;
        height: 150;
        position: relative;
        margin: 5;
    `;

    return (
        <Container direction= "column">
            <ImagePagination end={end} pagesCount={imageArray.length} currentPage={pageSelected} start={start} handlePageClick={setPageSelected}/>
            <div style={style}>
                <progress value={progress} max="100"/>
                <br/>
                <input type="file" onChange={handleChange}/>
                <button onClick={() => handleUpload()}>Upload</button>
                <br/>
                <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
            </div>
            <Container direction="row" wrap="wrap">
                {
                    imageArray.map((image, index) => 
                    (
                        <Container id="index" direction="column">
                            <ExistingImage src={image.url} id={index}/>
                            <p>{image.name}</p>
                        </Container>
                    ))
                }
            </Container>
        </Container>
    )
}

export default ImageUpload;
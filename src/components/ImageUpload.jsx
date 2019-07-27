import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container.jsx'
import { getAllImages } from '../util/UtilHelper.jsx'

const ImageUpload = () => {
const imageArray = getAllImages();

const ExistingImage = styled.img`
    background-size: 100% 100%;
    width: 150;
    height: 150;
    position: relative;
    margin: 5;
    `;

    return(
        <Container wrap="wrap">
            {
                imageArray.map((image, index) => (
                    <Container id="index" >
                        <ExistingImage src={image} id={index}/>
                    </Container>
                ))
            }
        </Container>
    )
}

export default ImageUpload;
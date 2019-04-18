import React from 'react'
import styled from 'styled-components';

const Photo = props => {
    
    let photoWidth;
    let photoHeight;

    if(props.type === "header"){
        photoWidth = "1000px"
        photoHeight = "300px"
    }else{
        photoWidth = "300px"
        photoHeight = "500px"
    }
    
    const PhotoContainer = styled.div`
    border-style: solid;
    height: ${photoHeight};
    width: ${photoWidth};
    background-image: url(${props.img});
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    
`;

    


    return(
        <PhotoContainer />
    );
}

export default Photo;
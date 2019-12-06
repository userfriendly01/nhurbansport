import React, { useState, useContext } from 'react'
import Container from './Container.jsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { StateContext } from '../context/appContext.jsx'

const Image = ({
    id,
    width,
    height,
    margin,
    cursor
}) => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;

    const uploadIcon = <FontAwesomeIcon icon={faAngleDoubleUp} />

    const ImageContent = styled.div`
        background-image: url("${images[id]}");
        background-size: 100% 100%;
        min-width: ${width};
        min-height: ${height};
        position: relative;
        margin: ${margin};
        &:hover {
            cursor: ${cursor ? cursor : null};
        }
    `;

    const UploadIconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center
        width: 20;
        position: absolute; 
        z-index: 2;
        left: 10;
        top: 10;
        color: #d1e0e0;
        &:hover {
            color: #4dff4d;
            cursor: pointer;
        }
    `;

    return (
      <Container position="relative" margin="0">
        <Link to={{
          pathname: `/upload-image`, 
          state: {
            url: images[id],
            name: id,
            height: height,
            width: width
        }}}>
          <UploadIconWrapper>
            {uploadIcon}   
          </UploadIconWrapper>    
        </Link>
        <ImageContent/>
      </Container>
    )
}
export default Image;
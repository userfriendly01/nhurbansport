import React, { useState} from 'react'
import Container from './Container.jsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Image = (props) => {

    const uploadIcon = <FontAwesomeIcon icon={faAngleDoubleUp} />
    const [uploadIconShouldDisplay] = useState(props.upload != null ? props.upload : true);

    const ImageContent = styled.div`
        background-image: url("${props.url}");
        // src: ${props.src};
        background-size: 100% 100%;
        min-width: ${props.width};
        min-height: ${props.height};
        position: relative;
        margin: ${props.margin};
        &:hover {
            cursor: ${props.cursor ? props.cursor : null};
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


    return(
        <Container position="relative" margin="0">
            {uploadIconShouldDisplay ?
                <Link to={{
                    pathname: `/upload-image`, 
                    state: {
                        url: props.url,
                        name: props.name,
                        height: props.height,
                        width: props.width
                    }
                }}>
                    <UploadIconWrapper>
                        {uploadIcon}   
                    </UploadIconWrapper>    
                </Link>
                : null
            }
            <ImageContent/>
        </Container>
    )

}
export default Image;
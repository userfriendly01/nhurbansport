import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
    background-image: url("${props => props.url}");
    background-size: 100% 100%;
    min-width: ${props => props.width};
    min-height: ${props => props.height};
    position: relative;
    margin: ${props => props.margin};
`;

const CustomImage = () => {
    return (
        <div className={Image}></div>
    );
}

export default CustomImage;
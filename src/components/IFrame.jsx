import styled from 'styled-components'
import { iFrameResize } from 'iframe-resizer'
import React from 'react'
 
 const IFrame = (props) => {

    //const iframes = iFrameResize([{}], [] || [iframe])
    const IFrameContainer = styled.div`
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 0px; 
        overflow: hidden;
        width: ${props => props.width ? props.width : "700px"};
        height: ${props => props.height ? props.height : "1500px"};
    `;

    const StyledIFrame = styled.iframe`
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        min-width: 100%;
        height: 100%;
        border: none;
    `;

    return (
        <IFrameContainer>
            <StyledIFrame
                src= {props.src}
                scrolling="no"
                height= {props.height}
                width= {props.width}
            />
        </IFrameContainer>
    );
 }

 export default IFrame;

 
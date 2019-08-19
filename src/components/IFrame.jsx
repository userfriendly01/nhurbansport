import styled from 'styled-components'
import React from 'react'
 
 const IFrame = (props) => {

    const IFrameContainer = styled.div`
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 0px; overflow: hidden;
    `;

    const StyledIFrame = styled.iframe`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        marginwidth="0"
        marginheight="0"
    `;

    return (
        <IFrameContainer>
            <StyledIFrame
                src= {props.src}
                scrolling="yes"
                height= {props.height}
                width= {props.width}
            />
        </IFrameContainer>
    );
 }

 export default IFrame;

 
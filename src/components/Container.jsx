import React from 'react'
import styled from 'styled-components'

const Return = styled.div`
        display: flex;
        margin: 20 5 0 5;
        flex-direction: ${props => props.direction};
        align-items: ${props => props.align};
        background-color: ${props => props.bcolor};
        width: ${props => props.width};
        padding: ${props => props.padding};
        text-align: center;
    `;

function Container () {
    return (
        <Return />
    );
}

export default Container;
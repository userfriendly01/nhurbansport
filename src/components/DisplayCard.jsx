import styled from 'styled-components'

const DisplayCard = styled.div`
        display: flex;
        flex-direction: ${props => props.direction};
        
        background-color: ${props => props.bcolor ? props.bcolor : "white"};
        color: ${props => props.color};
        width: ${props => props.width};
        height: ${props => props.height};

        padding: ${props => props.padding ? props.padding : "1%"};
        margin: ${props => props.margin};
        border: ${props => props.border};
        border-radius: 5px;

        font-size: ${props => props.size};
        font-weight: ${props => props.weight};
        white-space: pre-line;
    `;

export default DisplayCard;
import styled from 'styled-components'

const DisplayCard = styled.div`
        display: flex;
        
        background-color: white;
        color: ${props => props.color};
        width: ${props => props.width};
        height: ${props => props.height};

        padding: 1%;
        border-radius: 5px;

        font-size: ${props => props.size};
        white-space: pre-line;
    `;

export default DisplayCard;
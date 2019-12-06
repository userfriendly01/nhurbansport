import styled from 'styled-components'

const DisplayCard = styled.div`
        display: flex;
        
        background-color: white;
        width: ${props => props.width};
        height: ${props => props.height};

        padding: 1%;
        border-radius: 5px;

        white-space: pre-line;
    `;

export default DisplayCard;
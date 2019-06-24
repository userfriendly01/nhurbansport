import styled from 'styled-components'

const TextContainer = styled.div`
    background-color: ${props => props.bcolor};
    text-align: center;
    opacity: ${props => props.opacity};
    top: ${props => props.top};
    bottom: 0; 
    width: ${props => props.width};
    padding: 5px;
    position: ${props => props.position};
    margin: ${props => props.margin};
    white-space: pre-line;
`;

export default TextContainer;
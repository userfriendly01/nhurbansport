import styled from 'styled-components';

const MyButton = styled.button`
    background-color: rgba(186,218,85,1);
    border-color: rgba(186,218,85,1);
    font-weight: bold;
    font-size: ${props => props.size};
    padding: 5 24;
    height: calc(1.5em + .75rem + 2px);
    margin: ${props => props.margin ? props.margin : "0 10"};
    align-self: ${props => props.align};
    width: ${props => props.width};
`

export default MyButton;
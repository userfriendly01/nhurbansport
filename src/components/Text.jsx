import styled from 'styled-components'

const Text = styled.div`
    padding: 2;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    white-space: pre-line;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`;

export default Text;
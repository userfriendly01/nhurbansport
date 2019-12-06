import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: ${props => props.align};
        flex-direction: ${props => props.direction};
        width: ${props => props.width};
        height: ${props => props.height};
        margin: ${props => props.margin};
        padding: ${props => props.padding};
    `;

export default Wrapper;
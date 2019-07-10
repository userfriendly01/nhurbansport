import styled from 'styled-components'

const Container = styled.div`
        display: flex;
        margin: ${props => props.margin ? props.margin : "20 5 0 5"};
        flex-direction: ${props => props.direction};
        flex-wrap: ${props => props.wrap};
        flex-grow: ${props => props.grow};
        align-items: ${props => props.align};
        background-color: ${props => props.bcolor};
        width: ${props => props.width};
        padding: ${props => props.padding};
        text-align: center;
        justify-content: center;
        border: ${props => props.border};
    `;

export default Container;
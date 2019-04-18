import React from 'react'
import styled from 'styled-components';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const StyledDiv = styled.div`
            position: absolute;
            bottom: 10px;
        `;
        return (
            <StyledDiv>   
                <h1>I'm a Test Footer! Woohoo!</h1>
            </StyledDiv>
        );
    }

}

export default Footer;
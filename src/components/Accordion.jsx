import React, { useState } from 'react'
import Container from './Container.jsx'
import styled from 'styled-components'
import Text from './Text.jsx'


const Accordion = (props) => {
  const title = props.title;
  const [ expand, setExpand] = useState(props.expand);  
  const content = props.content;
  const onClick = () => {
    setExpand(!expand);
  };

const StyledTitle = styled.dt `
  padding: 10px;
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  color: ${props => props.color ? props.color : "white"};
  position: relative;
  font-size: 20px;
  background: ${props => props.bcolor ? props.bcolor : "#26a3d9"};
  text-align: left;

  &::after {
    content: "+";
    font-size: 18px;
    color: ${props => props.scolor ? props.scolor : "white"};
    transition: transform .5s ease-in-out;
    position: absolute;
    right: 30px;
    font-family: monospace;
  }

  &.is-expanded {
    transition: background .5s;
    
    &::after {
      content: "-";
      transform: rotate(-360deg);
    }
  }`

  const StyledContent = styled.dd`
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s;
    margin: 0;
    padding: 0 30px;
    border-top: 0;
    background: ${props => props.bcolor ? props.bcolor : "white"};
    ;

    p {
      border: solid 1px #eeeeee;
      margin: 1;
      padding: 10px;
      opacity: 0;
      transition: .5s;
    }
    
    &.is-expanded {
      max-height: 500px;
      overflow: hidden;
      padding: 5px 30px;
      p {
        opacity: 1;
      }
    }
  }

  `  
      return (
        <Container direction="column" 
                    border="solid 1px #eeeeee" 
                    margin="10px 5px">
          <StyledTitle bcolor={props.bcolor}
                        color={props.color}
                        scolor={props.scolor}
                        className={expand ? 'title is-expanded' : 'title'} 
                        onClick={onClick}>
            {title}
          </StyledTitle>
          <StyledContent className={expand ? 'content is-expanded' : 'content'}>
            {content}
          </StyledContent>
        </Container>
      );
    }

    export default Accordion;
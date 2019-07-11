import React, { useState } from 'react'
import Container from '../components/Container.jsx'
import styled from 'styled-components'
import Text from '../components/Text.jsx'

const StyledTitle = styled.dt `
  padding: 30px 30px;
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  color: white;
  position: relative;
  font-size: 20px;
  background: #1569a8;
  margin-bottom: -1px;
  border-bottom: 1px solid #0e4671;
  text-align: left;

  &::after {
    content: "+";
    font-size: 18px;
    color: white;
    transition: transform .5s ease-in-out;
    position: absolute;
    right: 30px;
    font-family: monospace;
  }

  &.is-expanded {
    transition: background .5s;
    background: #0e4671;
    
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
    border: solid 1px #eeeeee;
    border-top: 0;
    background: #e8f4fc;

    p {
      padding: 30px 0;
      margin: 0;
      opacity: 0;
      transition: .5s;
    }
    
    &.is-expanded {
      max-height: 500px;
      overflow: hidden;
      p {
        opacity: 1;
      }
    }
  }

  `


const Accordion = (props) => {
    //Eventually set this up to loop through the teams and set the title as each one in the list
        const title = props.title;
    //Eventually set this up to only equal true if it's the first sport in the list
        const [ expand, setExpand] = useState(props.expand);
        //expand={this.state[`block${index+1}`]}
  
        const content = props.content;
        const onClick = () => {
          setExpand(!expand);
          console.log("Did I.. did I expand?");
        };
        
        return (
          <Container direction="column">
            <StyledTitle className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
              {title}
            </StyledTitle>
            <StyledContent className={expand ? 'content is-expanded' : 'content'}>
              {content}
            </StyledContent>
          </Container>
        );
    }

    export default Accordion;
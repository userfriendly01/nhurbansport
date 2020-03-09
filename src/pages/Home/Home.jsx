import React, { useEffect, useState } from 'react'
import {
    Image,
    Button,
    TextCard,
    DisplayCard,
    Wrapper
} from '../../components'
import { Form, FormGroup, Input} from 'reactstrap'
import styled from 'styled-components';

const StyledWrapper = styled(Wrapper)`  
  background-color: white;
`;
const QuestionsAndCommentsWrapper = styled(Wrapper)`
  background-color: #0066ff;
  padding: 3%;
  width: 95%;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 90%;
  margin: 5px;
`;

const StyledFormGroup = styled(FormGroup)`
  width: 500px;
`;

const Home = ({focus}) => {
  const optionArray = [
    {
      id: "Home: Option 1",
      link: "/leagues"
    },
    {
      id: "Home: Option 2",
      link: "/contact"
    },
    {
      id: "Home: Option 3",
      link: "/playerportal"
    }
  ];
  const aboutUs = "Home: About Us";

  useEffect(() => {
    if(focus){
      const element = document.getElementById(focus)
      element.scrollIntoView({behavior: "smooth"});
    }
  }, [])

  return (
    <Wrapper direction="column" align="center">
      <Wrapper>
        <Image id="Home Banner" height="320" width="650" margin="0 0 10px 0"/>
      </Wrapper>
      <Wrapper>
        { optionArray.map(option => {
          return (
            <StyledWrapper direction="column" width="200" margin="0 10" >
              <DisplayCard>
                <TextCard id={option.id} />
              </DisplayCard>
              <Image id={option.id} height="180" width="180" margin="0 0 4% 0" link={option.link}/>
            </StyledWrapper>
            )
          })
        }
          </Wrapper>
      <Wrapper width="630" margin="5px">
        <DisplayCard id="about">
          <TextCard id={aboutUs} />
        </DisplayCard>
        <Image id={aboutUs} height="180" width="180"/>
      </Wrapper>
      <QuestionsAndCommentsWrapper id="contact">
        QUESTIONS AND COMMENTS
        <Form>
          <StyledFormGroup>                            
            <StyledInput type="text" name="name" id="exampleName" placeholder="Name *" />
            <StyledInput type="email" name="email" id="exampleEmail" placeholder="Email *" />
            <StyledInput type="text" name="subject" id="exampleSubject" placeholder="Subject" />
            <StyledInput type="text" name="message" id="exampleMessage" placeholder="Message" />
          </StyledFormGroup>
          <Button>Send</Button>
        </Form>
      </QuestionsAndCommentsWrapper>  
    </Wrapper>
  );
}


export default Home;
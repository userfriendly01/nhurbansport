import React from 'react'
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

const Home = () => {
  const optionArray = ["Home: Option 1","Home: Option 2","Home: Option 3"];
  const aboutUs = "Home: About Us";

  return (
    <Wrapper direction="column" align="center">
      <Wrapper>
        <Image id="Home Banner" height="320" width="650" margin="0 0 10px 0"/>
      </Wrapper>
      <Wrapper>
        { optionArray.map(id => {
          return (
            <StyledWrapper direction="column" width="200" margin="0 10" >
              <DisplayCard>
                <TextCard id={id} />
              </DisplayCard>
            <Image id={id} height="180" width="180" margin="0 0 4% 0"/>
            </StyledWrapper>
            )
          })
        }
          </Wrapper>
      <Wrapper width="630" margin="5px">
        <DisplayCard>
          <TextCard id={aboutUs} />
        </DisplayCard>
        <Image id={aboutUs} height="180" width="180"/>
      </Wrapper>
      <QuestionsAndCommentsWrapper >
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
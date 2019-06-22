import React from 'react'
import styled from 'styled-components'
import { Form, FormGroup, Input} from 'reactstrap'

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0066ff;
    margin: 10 0;
    min-width: 640px;
`;

const ContactTitle = styled.div`
    color: white;
    font-size: 28px;

`;

const StyledInputContainer = styled.div`
    display: flex;
`;

const StyledFormGroup = styled(FormGroup)`
    border-radius: 0;
`;

const StyledInput = styled(Input)`
    margin: 5;
    font-size: 15;
    line-height: 600px;
    border-radius: 0;

`;
const StyledButton = styled.button`
    background-color: rgba(186,218,85,1);
    border-color: rgba(186,218,85,1);
    font-weight: bold;
    padding: 5 24;
    height: calc(1.5em + .75rem + 2px);
    margin: 0 10;

`;

const Contact = () => {
    return (
        <ContactContainer>
            <ContactTitle>QUESTIONS AND COMMENTS</ContactTitle>
            <ContactTitle>__</ContactTitle>
            <Form>
                <StyledFormGroup>
                    <StyledInputContainer>
                        <StyledInput type="text" name="name" id="exampleName" placeholder="Name *" />
                        <StyledInput type="email" name="email" id="exampleEmail" placeholder="Email *" />
                    </StyledInputContainer>
                    <StyledInput type="text" name="subject" id="exampleSubject" placeholder="Subject" />
                    <StyledInput type="text" name="message" id="exampleMessage" placeholder="Message" />
                </StyledFormGroup>
                <StyledButton>Send</StyledButton>
            </Form>
        </ContactContainer>
    );
}

export default Contact;
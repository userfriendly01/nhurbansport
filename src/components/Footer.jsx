import React from 'react'
import styled from 'styled-components'
import { Form, FormGroup, Button, Input} from 'reactstrap'

const Footer = () => {

    const StyledFooter = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0px;
        background-color: #D8D8D8;
        min-width: 100%;
        font-family: avenir-lt-w01_35-light1475496, sans-serif;
        letter-spacing: 0.35em;
        padding-top: 15px;
    `;

    const FooterText = styled.div`
        font-size: 18px;
    `;

    const MailingList = styled.div`
        font-weight: bold;
        padding: 10 10;
    `;
    
    const EmailInput = styled(Form)`
        display:flex;
        margin: 0;
    `;

    const SocialMedia = styled.div`
        display: flex;
    `;

    const SocialMediaIcon = styled.div`
        background-image: url("${props => props.iconImg}");
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0px 5px 10px 5px;
        height: 25px;
        width: 25px;
        border-radius: 5px;
    `;

    const StyledButton = styled.button`
        background-color: rgba(186,218,85,1);
        border-color: rgba(186,218,85,1);
        font-weight: bold;
        padding: 5 24;
        height: calc(1.5em + .75rem + 2px);
        margin: 0 10;
    `;

    //THIS LINE WORKS .. when I pass it as a prop, it no longer shows in the browser in a folder but still renders
    //background-image: url("facebook-icon.jpg");
    //url("src/images/facebook-icon.jpg")

    const CopyWrite = styled.div`
        font-style: italic;
        background-color: white;
        color: #5F5F5F;
        font-size: 12px;
        min-width: 100%;
        text-align: center;
        letter-spacing: 0;
    `;

    return(
        <StyledFooter>
            <FooterText>Recreational Coed Adult Sports League</FooterText>
            Manchester, NH
            <MailingList>JOIN OUR MAILING LIST</MailingList>
            <EmailInput>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" />
                </FormGroup>
                <StyledButton>Subscribe</StyledButton>
            </EmailInput>
            <SocialMedia>
                <a href="https://www.facebook.com/NHUrbanSport/">
                    <SocialMediaIcon iconImg="src/images/facebook-icon.jpg"/>
                </a>
                <a href="https://www.instagram.com/nhurbansport/">
                    <SocialMediaIcon iconImg="src/images/insta-icon.jpg"/>
               </a>
            </SocialMedia>
            <CopyWrite>C2019 NH Urban Sport, LLC. All Rights Reserved. </CopyWrite>
        </StyledFooter>
    )
}

export default Footer;
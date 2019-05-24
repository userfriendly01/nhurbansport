import React from 'react'
import styled from 'styled-components'
import { Form, FormGroup, Button, Input} from 'reactstrap'
import FacebookIcon from '../images/facebook-icon.jpg'

const Footer = () => {

    const StyledFooter = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0px;
        background-color: #EFFEBE;
        min-width: 100%;
        font-family: avenir-lt-w01_35-light1475496, sans-serif;
    `;

    const FooterText = styled.div`
        font-size: 18px;
    `;

    const EmailLabel = styled.div`
    
    `;
    
    const EmailInput = styled(Form)`
        display:flex;
    
    `;

    const SocialMedia = styled.div`
        display: flex;
    `;

    //       background-image: ${props => props.iconImg};
    const SocialMediaIcon = styled.div`
        background-image: url(src/images/facebook-icon.jpg);
        height: 20px;
        width: 20px;
    `;

    const CopyWrite = styled.div`
        font-style: italic;
        background-color: white;
        color: #5F5F5F;
        font-size: 15px;
        min-width: 100%;
        text-align: center;
    `;

    const Test = new Image();
    Test.src = FacebookIcon;

    return(
        <StyledFooter>
            <FooterText>Recreational Coed Adult Sports League</FooterText>
            <FooterText>Manchester, NH</FooterText>
            <EmailLabel>JOIN OUR MAILING LIST</EmailLabel>
            <EmailInput>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" />
                </FormGroup>
                <Button>Subscribe</Button>
            </EmailInput>
            <SocialMedia>
               <SocialMediaIcon/>
            </SocialMedia>
            <CopyWrite>C2019 NH Urban Sport, LLC. All Rights Reserved. </CopyWrite>
        </StyledFooter>
    )
}

export default Footer;
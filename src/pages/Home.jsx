import React from 'react'
import styled from 'styled-components'
import { Form, FormGroup, Input, InputGroup, InputGroupAddon} from 'reactstrap'

const Container = styled.div`
    display: flex;
    margin: 20 5 0 5;
    flex-direction: ${props => props.direction};
    align-items: ${props => props.align};
    background-color: ${props => props.bcolor};
    width: ${props => props.width};
    padding: ${props => props.padding};
    text-align: center;
    `;

const Image = styled.div`
    background-image: url("${props => props.url}");
    background-size: 100% 100%;
    min-width: ${props => props.width};
    min-height: ${props => props.height};
    position: relative;
    margin: ${props => props.margin};
`;

const Text = styled.div`
    padding: 2;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    white-space: pre-line;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`;

const TextContainer = styled.div`
    background-color: ${props => props.bcolor};
    text-align: center;
    opacity: ${props => props.opacity};
    bottom: 0; 
    width: ${props => props.width};
    padding: 5px;
    position: ${props => props.position};
    margin: ${props => props.margin};
`;

const StyledButton = styled.button`
    background-color: rgba(186,218,85,1);
    border-color: rgba(186,218,85,1);
    font-weight: bold;
    padding: 5 24;
    height: calc(1.5em + .75rem + 2px);
    margin: 0 10;
`


const Home = () => {
    return(
        <Container direction="column" align="center">
            <Image url="/src/images/home-banner-img.jpg"
                             height="320"
                             width="650">
                <TextContainer bcolor="#0066ff" width="100%" position="absolute"  opacity=".8">
                    <Text color="white" size="32" opacity="1">NH Urban Sport</Text>
                    <Text color="yellow" size="16" opacity="1">CO-ED ADULT SPORTS LEAGUE</Text>
                    <Text color="white" size="12" opacity="1">COMMUNITY | COMPETITION | CAMARADERIE</Text>
                </TextContainer>
            </Image>
            <Container>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">SPORTS LEAGUES</Text>
                    <Text>__</Text>
                    <Text size="13">From the couch potato to the weekend warrior, we have a sport for you.</Text>
                    <Image url="/src/images/home-option-1-img.jpg"
                                 height="180"
                                 width="180"
                                 margin="2%"/>
                </TextContainer>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">JOIN OUR EMAIL LIST</Text>
                    <Text>__</Text>
                    <Text size="13">Join our emails for league updates. Don't worry. We don't like spam either.</Text>
                    <Image url="/src/images/home-option-2-img.jpg"
                                 height="180"
                                 width="180"
                                 margin="2%"/>
                </TextContainer>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">PLAYER PORTAL</Text>
                    <Text>__</Text>
                    <Text size="13">Create an account to explore the forums for updated rosters, rules, and rankings.</Text>
                    <Image url="/src/images/home-option-3-img.jpg"
                                 height="180"
                                 width="180"
                                 margin="2%"/>
                </TextContainer>
            </Container>
            <Container align="stretch">
                <TextContainer bcolor="white" width="450">
                    <Text size="20" weight="bold">ABOUT US</Text>
                    <Text>__</Text>
                    <Text size="14">
                        NH Urban Sport, LLC is a veteran-owned-and operated, recreational sports organization that provides adaptive sports to disabled veterans and all able-bodied athletes in southern New Hampshire. It's the first organization in the Granite State to offer both adaptive and non-adaptive sports in the area
                    </Text>
                    <Text size="16" weight="bold">Mission</Text>
                    <Text size="14">
                        To provide affordable, inclusive athletic and recreational programming for adults with and without physical disabilities in a positive and empowering environment. 
                    </Text>
                    <Text size="16" weight="bold">Vision</Text>
                    <Text size="14">
                        To build an inclusive recreational sports organization not just accommodated for or accessible to veterans with disabilities but rather specifically designed for their unique recreational needs while also engaging the able-bodied public
                    </Text>
                </TextContainer>
                <Image url="/src/images/about-us-img.jpg"
                                 height="180"
                                 width="180"/>
            </Container>
            <Container padding="3%" bcolor="#0066ff" width="95%" direction="column" >
                <Text size="28px" color="white">QUESTIONS AND COMMENTS</Text>
                <Text size="28px" color="white">__</Text>
                <Form>
                    <FormGroup>                            
                        <Input type="text" name="name" id="exampleName" placeholder="Name *" />
                        <br/>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email *" />
                        <br/>                        
                        <Input type="text" name="subject" id="exampleSubject" placeholder="Subject" />
                        <br/>
                        <Input type="text" name="message" id="exampleMessage" placeholder="Message" />
                    </FormGroup>
                    <StyledButton>Send</StyledButton>
                </Form>
            </Container>   
        </Container>
    );
}

export default Home;
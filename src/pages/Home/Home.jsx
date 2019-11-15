import React, { useContext } from 'react'
import {
    Container,
    Image,
    Text,
    TextContainer,
    Button
} from '../../components'
import { Form, FormGroup, Input} from 'reactstrap'
import { StateContext } from '../../context/appContext.jsx'

const Home = () => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;
    console.log("The home page is accessing this value: ", context);
    console.log("The Images array is: ", images)
    return (
        <Container direction="column" align="center">
            <Container position="relative">
                <Image url={images["Home Banner"]}
                             name="Home Banner"
                             height="320"
                             width="650"/>
                <TextContainer bcolor="#0066ff" width="100%" position="absolute"  opacity=".8">
                    <Text color="white" size="32" opacity="1">NH Urban Sport</Text>
                    <Text color="yellow" size="16" opacity="1">CO-ED ADULT SPORTS LEAGUE</Text>
                    <Text color="white" size="12" opacity="1">COMMUNITY | COMPETITION | CAMARADERIE</Text>
                </TextContainer>
            </Container>
            <Container>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">SPORTS LEAGUES</Text>
                    <Text>__</Text>
                    <Text size="13">From the couch potato to the weekend warrior, we have a sport for you.</Text>
                    <Image url={images["Home: Option 1"]}
                                name="Home: Option 1"
                                height="180"
                                width="180"
                                margin="2%"/>
                </TextContainer>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">JOIN OUR EMAIL LIST</Text>
                    <Text>__</Text>
                    <Text size="13">Join our emails for league updates. Don't worry. We don't like spam either.</Text>
                    <Image url={images["Home: Option 2"]}
                                name="Home: Option 2"
                                height="180"
                                width="180"
                                margin="2%"/>
                </TextContainer>
                <TextContainer bcolor="white" width="200" margin="0 10">
                    <Text size="16" weight="bold">PLAYER PORTAL</Text>
                    <Text>__</Text>
                    <Text size="13">Create an account to explore the forums for updated rosters, rules, and rankings.</Text>
                    <Image url={images["Home: Option 3"]}
                                name="Home: Option 3"
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
                <Image url={images["Home: About Us"]}
                            name="Home: Option 2"
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
                    <Button>Send</Button>
                </Form>
            </Container>   
        </Container>
    );
}


export default Home;
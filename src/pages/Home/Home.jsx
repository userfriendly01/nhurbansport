import React, { useContext, useState } from 'react'
import {
    Container,
    CustomHTMLParser,
    Image,
    Text,
    TextContainer,
    Button,
    EditTextModal
} from '../../components'
import { Form, FormGroup, Input} from 'reactstrap'
import { StateContext } from '../../context/appContext.jsx'

const Home = () => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;
    const adminText = context.state.adminContext.text;
    const optionArray = ["Home: Option 1","Home: Option 2","Home: Option 3"];
    const aboutUs = "Home: About Us";
    const [ editModal, setEditModal ] = useState(
      {
        open: false,
        key: "",
        html: ""
      }    
    )

    console.log("The home page is accessing this value: ", context);
    console.log("Here is the editModal Object: ", editModal);

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
                { optionArray.map(key => {
                  return (
                    <Container direction="column" bcolor="white" width="200" margin="0 10" justify="space-between" 
                        onClick={() => setEditModal(
                        {
                            open: true,
                            key: key,
                            html: adminText[key]
                        } 
                        )}>
                    <CustomHTMLParser html={adminText[key]} />
                    <Image url={images[key]}
                         name={key}
                         height="180"
                         width="180"
                         margin="2%"/>
                    </Container>
                    )
                })
                }
            </Container>
            <Container align="stretch">
                <TextContainer bcolor="white" width="450" onClick={() => setEditModal(
                    {
                        open: true,
                        key: aboutUs,
                        html: adminText[aboutUs]
                    } 
                    )}>>
                  <CustomHTMLParser html={adminText[aboutUs]} />
                </TextContainer>
                <Image url={images[aboutUs]}
                            name={aboutUs}
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
            <EditTextModal 
                callbackState={editModal}
                callbackFunction={setEditModal}
                header={editModal.key}
                html={editModal.html}
                />
        </Container>
    );
}


export default Home;
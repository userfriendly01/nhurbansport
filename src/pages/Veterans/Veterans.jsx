import React, { useContext, useState } from 'react'
import {
    Container,
    CustomHTMLParser,
    EditTextModal,
    Image,
    Text,
    TextContainer,
    Button
} from '../../components'
import { StateContext } from '../../context/appContext.jsx';

const Veterans = () => {
    const context = useContext(StateContext);
    const images = context.state.imageContext.imageData;
    const adminText = context.state.adminContext.text;
    const veterans = "Veterans";
    const [ editModal, setEditModal ] = useState(
        {
          open: false,
          key: "",
          html: ""
        }    
      )

    return (
        <div>
            <Container>
                <Image url={images["Veterans Banner"]}
                       name="Veterans Banner"
                       width="650"
                       height="320">
                    <TextContainer top="260" position="relative">
                        <Text size="32" color="white">Veterans</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container>
                <TextContainer direction="column" width="650" align="left" bcolor="white" onClick={() => setEditModal(
                    {
                        open: true,
                        key: veterans,
                        html: adminText[veterans]
                    } 
                    )}>
                    <CustomHTMLParser html={adminText[veterans]} />
                    <Container><Button>Join A League</Button></Container>
                </TextContainer>
            </Container>
            <EditTextModal 
                callbackState={editModal}
                callbackFunction={setEditModal}
                header={editModal.key}
                html={editModal.html}
                />
        </div>
    );
}

export default Veterans;
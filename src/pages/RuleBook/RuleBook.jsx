import React, { useState } from 'react'
import Container from '../../components/Container.jsx'
import TextContainer from '../../components/TextContainer.jsx'
import Text from '../../components/Text.jsx'
import Image from '../../components/Image.jsx'
import IFrame from '../../components/IFrame.jsx'
import { images } from '../../util/Constants.jsx'
import { getRuleBooks } from '../../service/Database/Documents.jsx'
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap'


const RuleBook = () => {
    const [ pages, setPages ] = useState(getRuleBooks());
    
    const handleShow = index => {
        let newPageObject = [...pages]
        newPageObject[index].show = true
        setPages(newPageObject);
    }

    const handleClose = index => {
        let newPageObject = [...pages]
        newPageObject[index].show = false
        setPages(newPageObject);
    }

    return (
        <Container direction="column" width="600" margin="0 auto">
            <Container position="relative" margin="10 0 10 0">
                <Image url={images.RULEBOOK.BANNER}
                    height="200"
                    width="650"/>
            </Container>
          <Container direction="column" align="center">
          { 
            pages.map((document, index) => (
              <div key={index}>
                <Container direction="column" bcolor="white" width="450" radius="10px" margin="10">
                    <TextContainer>
                        <Text size="24">{document.title}</Text>
                    </TextContainer>
                    <Image url={document.image}
                    height="200"
                    width="450"/>
                    <Button onClick={() => handleShow(index)}> View RuleBook</Button>
                </Container>
                <Container position="relative" margin="0">
                    <Modal isOpen={document.show} toggle={() => handleClose(index)} size="lg" scrollable={true}>
                        <ModalHeader>
                            {document.title}
                        </ModalHeader>
                        <ModalBody>
                            <IFrame src={document.source}
                            scrolling="yes"
                            height="200px"
                            width="800px">
                            </IFrame>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => handleClose(index)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
              </div>
            ))
          }
          </Container>
        </Container>
    )
}

export default RuleBook;
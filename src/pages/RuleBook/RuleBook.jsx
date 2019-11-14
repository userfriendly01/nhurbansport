import React, { useState, useContext } from 'react'
import {
  Container,
  TextContainer,
  Text,
  Image,
  IFrame } 
from '../../components'
import { StateContext } from '../../context/appContext.jsx'
import {
  Modal, 
  ModalBody,
  ModalHeader, 
  ModalFooter, 
  Button
} from 'reactstrap'

const RuleBook = () => {
    const context = useContext(StateContext);
    const [ pages, setPages ] = useState(context.state.documentContext.ruleBooks);
    const images = context.state.imageContext.imageData;

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
                <Image url={images["Rulebook Banner"]}
                    name="Rulebook Banner"
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
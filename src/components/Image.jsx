import React, { useState, useEffect } from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap'
import Container from '../components/Container.jsx'
import ImageUpload from '../components/ImageUpload.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { uploadImage, downloadImage } from '../util/UtilHelper.jsx'

const Image = (props) => {

    const uploadIcon = <FontAwesomeIcon icon={faAngleDoubleUp} />

    const ImageContent = styled.div`
    background-image: url("${props.url}");
    background-size: 100% 100%;
    min-width: ${props.width};
    min-height: ${props.height};
    position: relative;
    margin: ${props.margin};
    `;

    const UploadIconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center
        width: 20;
        position: absolute; 
        z-index: 2;
        left: 10;
        top: 10;
        color: #d1e0e0;
        &:hover {
            color: #4dff4d;
            cursor: pointer;
        }
    `;

    const [ showModule, setShowModule ] = useState(false);
    const [ currentImage, setCurrentImage ] = useState();
    const handleClose = () => setShowModule(false);
    const handleShow = () => setShowModule(true);
    const handleChange = e => {
        if(e.target.files[0]){
            const imageFile = e.target.files[0];
            setCurrentImage(() => ({imageFile}));
            console.log("Handle Change was called");
        }
    }

    useEffect(() => {
        if(currentImage){
            uploadImage(currentImage.imageFile)
                .then((filename) => {
                    console.log("Filename: " , filename)
                    downloadImage(filename).then((url) => {
                        //setCurrentImage(url)
                        console.log("I'm the download url!", url)
                    })
                    
                })
        }
    }, currentImage)

    return (
        <Container position="relative" margin="0">
            <Modal isOpen={showModule} toggle={handleClose} size="lg" scrollable={true}>
                <ModalHeader>
                    Select Picture
                </ModalHeader>
                <ModalBody>
                    <ImageUpload />
                </ModalBody>
                <ModalFooter>
                    <input type="file" onChange={handleChange}/>
                    <Button onClick={handleClose}>Do Stuff</Button>
                </ModalFooter>
            </Modal>
            <UploadIconWrapper onClick={handleShow}>
                {uploadIcon}       
            </UploadIconWrapper>
        <ImageContent/>
      </Container>
 )
}
export default Image;
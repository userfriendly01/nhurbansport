import React from 'react';
import {
  Modal, 
  ModalBody,
  ModalHeader, 
  ModalFooter
} from 'reactstrap';
import {
  Button,
  TextEditor
} from '../../components';

const EditTextModal = ({
  header,
  callbackState,
  callbackFunction,
  html,
  isOpen,
  buttons
}) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        {header}
      </ModalHeader>
      <ModalBody>
        <TextEditor callbackState={callbackState} callbackFunction={callbackFunction} html={html} />
      </ModalBody>
      <ModalFooter>
        {
          buttons.map(button => {
            <Button onclick={button.onclick} />
          })
        }
      </ModalFooter>
    </Modal>
  )
};

export default EditTextModal;
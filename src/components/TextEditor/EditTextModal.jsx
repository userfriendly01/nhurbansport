import React, { useContext } from 'react';
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
import { updateAdminText } from '../../service/Database'
import { StateContext } from '../../context/appContext.jsx'

const EditTextModal = ({
  callbackState,
  callbackFunction
}) => {
  const context = useContext(StateContext);

  const handleSave = () => {
    updateAdminText(callbackState.id, callbackState.html, updateAdminContext);
    handleClose();
  }

  const handleClose = () => {
    callbackFunction({
      ...callbackState,
      open: false
    });
  }

  const updateAdminContext = () => {
    context.setState({
      ...context.state,
      adminContext: {
        ...context.state.adminContext,
        text: {
          ...context.state.adminContext.text,
          [callbackState.id]: callbackState.html
        }
      }
    });
  }

  return (
    <Modal isOpen={callbackState.open}>
      <ModalHeader>
        {callbackState.id}
      </ModalHeader>
      <ModalBody>
        <TextEditor callbackState={callbackState} callbackFunction={callbackFunction} html={callbackState.html} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
};

export default EditTextModal;
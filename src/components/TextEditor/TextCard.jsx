import React, { useState, useContext } from 'react';
import CustomHTMLParser from './CustomHTMLParser.jsx'
import EditTextModal from './EditTextModal.jsx'
import styled from 'styled-components';
import { StateContext } from '../../context/appContext.jsx'

const StyledTextCard = styled.div`
  margin: 1%;
`;

const TextCard = ({ id }) => {
  const context = useContext(StateContext);
  const adminText = context.state.adminContext.text;

  const [ editModal, setEditModal ] = useState(
    {
      open: false,
      id: "",
      html: ""
    }    
  )

  console.log("Here is the editModal Object: ", editModal);
  console.log("The ID is coming through as: ",id);
  return (
    <div>
      <StyledTextCard onClick={() => setEditModal(
        {
          open: true,
          id: id,
          html: adminText[id]
        } 
      )}>
      <CustomHTMLParser html={adminText[id]} />
      </StyledTextCard>
      <EditTextModal 
        callbackState={editModal}
        callbackFunction={setEditModal}
        header={editModal.id}
        html={editModal.html}
      />
    </div>
  );
};

export default TextCard;
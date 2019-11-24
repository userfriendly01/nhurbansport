import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'

const StyledDeleteIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20;
  margin: 0 10px;
  &:hover{
    cursor: pointer;
    color: #007bff;
  }
`;

const DeleteIcon = ({
  deleteFunction
}) => {

return (
  <StyledDeleteIcon onClick={deleteFunction} icon={faTrashAlt} />
  )
}

export default DeleteIcon;

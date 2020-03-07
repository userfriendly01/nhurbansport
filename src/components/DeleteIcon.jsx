import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'

const StyledDeleteIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: ${props => props.size ? props.size : "20"};
  margin: 0 10px;
  &:hover{
    cursor: pointer;
    color: #007bff;
  }
`;

const DeleteIcon = ({
  deleteFunction,
  size
}) => {

return (
  <StyledDeleteIcon size={size} onClick={deleteFunction} icon={faTrashAlt} />
  )
}

export default DeleteIcon;

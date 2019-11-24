import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledEditIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20;
  margin: 0 10px;
  &:hover{
    cursor: pointer;
    color: #007bff;
  }
`;

const EditIcon = ({
  route,
  id
}) => {

return (
  <Link to={route + "/" + id}>
    <StyledEditIcon icon={faEdit} />
  </Link>
  )
}

export default EditIcon;

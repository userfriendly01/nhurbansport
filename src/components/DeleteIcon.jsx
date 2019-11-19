import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const DeleteIcon = ({
  deleteFunction
}) => {

return (
  <FontAwesomeIcon onClick={deleteFunction} icon={faTrashAlt} />
  )
}

export default DeleteIcon;

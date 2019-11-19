import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const EditIcon = ({
  route,
  id
}) => {

return (
  <Link to={route + "/" + id}>
    <FontAwesomeIcon icon={faEdit} />
  </Link>
  )
}

export default EditIcon;

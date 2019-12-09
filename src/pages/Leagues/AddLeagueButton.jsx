import React from 'react'
import { ControlPoint } from '@material-ui/icons'
import { 
    Wrapper, 
    DisplayCard 
} from '../../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCard = styled(DisplayCard)`
  align-items: center;
  justify-content: center;
  width: 200;
  height: 180;
`

const StyledPlus = styled(ControlPoint)`
  min-width: 75;
  min-height: 75;
  &:hover {
    cursor: pointer;
    color: #16181b;
}
`

const AddLeagueButton = ({
    to
}) => {
  return (
    <Wrapper align="center">
      <StyledCard>
        <Link to={to}>
          <StyledPlus />
        </Link>
      </StyledCard>
    </Wrapper>
  );
};

export default AddLeagueButton;
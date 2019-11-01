import React from 'react'
import { ControlPoint } from '@material-ui/icons'
import { Container } from '../../components'
import { Card } from '@material-ui/core'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200;
  min-height: 180;
  margin: 10;
`

const StyledPlus = styled(ControlPoint)`
  min-width: 75;
  min-height: 75;
  &:hover {
    cursor: pointer;
    color: #16181b;
}
`

const AddLeagueButton = () => {
    return (
        <Container>
            <StyledCard>
                <StyledPlus />
            </StyledCard>
        </Container>
    );
};

export default AddLeagueButton;
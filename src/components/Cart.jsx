import React, { useState } from 'react';
import {
  // Button,
  Container
} from '../components'
import Button from './Buttons/Button.jsx'
import {
  Select, MenuItem, TextField, InputLabel
} from '@material-ui/core'
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`

const StyledSelect = styled(Select)`
  width: 90%;
  margin: 10 0;
`

const StyledButton = styled(Button)`
  width: 90%;
  margin: 10 0;
`

const Cart = () => {
  const [ team, setTeam ] = useState("Select a team");
  const [ shirtSize, setShirtSize ] = useState("Select a T-Shirt size");
  
  const handleNewTeam = event => {
    //Eventually move Add Team functionality to database and set the dropdown as the new value
    setTeam(event.target.value);
  }

  return (
    <Container direction="column" align="center" margin="10 20" align="start">
      <InputLabel>Choose a shirt size</InputLabel>
      <StyledSelect
        value={shirtSize}
        label="Where does this pop up"
        onChange={e => {setShirtSize(e.target.value)}}
      >
        <MenuItem value="SM">Small</MenuItem>
        <MenuItem value="MED">Medium</MenuItem>
        <MenuItem value="LG">Large</MenuItem>
        <MenuItem value="XL">Xtra Large</MenuItem>
        <MenuItem value="2XL">2XL</MenuItem>
      </StyledSelect>
      <InputLabel>Choose a team</InputLabel>
      <StyledSelect
        value={team}
        onChange={e => {setTeam(e.target.value)}}
      >
        <MenuItem value="PoundTown">PoundTown</MenuItem>
        <MenuItem value="Monstars">Monstars</MenuItem>
        <MenuItem value="Piff Squad">Piff Squad</MenuItem>
        <MenuItem value="new">Add a new Team</MenuItem>
      </StyledSelect>
      { team === "new" ?
        <Container direction="column" align="center" margin="0">
          <StyledTextField 
            id="team"
            label="Enter Team Name" 
            margin="normal"
            />
        </Container>
        :
        null
      }
      <StyledButton onClick={handleNewTeam}>Add to Cart</StyledButton>
    </Container>
  );
};

export default Cart;
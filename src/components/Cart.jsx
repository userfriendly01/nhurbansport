import React, { useState } from 'react';
import {
  Button,
  CreateDropDown,
  DisplayCard,
  StandardDropDown,
  Wrapper
} from '../components'

const Cart = () => {
  //Update this to feed existing teams
  const teamOptions = ["PoundTown", "Monstars", "PiffSquad"];
  const shirtOptions = [
    {
      key: "Small",
      value: "Small"
    },
    {
      key: "Medium",
      value: "Medium"
    },
    {
      key: "Large",
      value: "Large"
    },
    {
      key: "Xtra Large",
      value: "Xtra Large"
    },
    {
      key: "2XL",
      value: "2XL"
    }];
  const [ team, setTeam ] = useState("Select a team");
  const [ shirtSize, setShirtSize ] = useState("Select a T-Shirt size");
  
  const handleNewTeam = event => {
    //Eventually move Add Team functionality to database and set the dropdown as the new value
    setTeam(event.target.value);
  }

  return (
    <Wrapper direction="column" align="center" margin="10 20" align="start">
      <DisplayCard>Choose a shirt size</DisplayCard>
      <StandardDropDown 
        width="300"
        label="key"
        value="value"
        options={shirtOptions} 
        updateFunction={setShirtSize} />
      <DisplayCard>Choose a team</DisplayCard>
      <CreateDropDown 
        width="300" 
        options={teamOptions} 
        updateFunction={setTeam} />
      <Button onClick={handleNewTeam}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Cart;
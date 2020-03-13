import React, { useState } from 'react';
import {
  Button,
  DisplayCard,
  StandardDropDown,
  Wrapper
} from '../components'
import { TeamCreateDropDown } from "../util/DropdownHelpers.jsx"

const Cart = ({
  sessionId
}) => {
  const shirtOptions = [
    {
      label: "Small",
      value: "Small"
    },
    {
      label: "Medium",
      value: "Medium"
    },
    {
      label: "Large",
      value: "Large"
    },
    {
      label: "Xtra Large",
      value: "Xtra Large"
    },
    {
      label: "2XL",
      value: "2XL"
    }];
  const [ team, setTeam ] = useState("Select a team");
  const [ shirtSize, setShirtSize ] = useState("Select a T-Shirt size");

  return (
    <Wrapper direction="column" align="center" margin="10 20" align="start">
      <DisplayCard>Choose a shirt size</DisplayCard>
      <StandardDropDown props={{
          isSearchable: false,
          label:"",
          placeholder: "Select Shirt Size"
        }}
        styles={{width: "300"}}
        options={shirtOptions} 
        updateFunction={selection => {setShirtSize(selection.value)}} />
      <DisplayCard>Choose a team</DisplayCard>
      <TeamCreateDropDown label="" sessionId={sessionId} updateFunction={selection => setTeam(selection)} />
      <Button>Add to Cart</Button>
    </Wrapper>
  );
};

export default Cart;
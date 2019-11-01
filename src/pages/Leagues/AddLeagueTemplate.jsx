import React, { useState } from 'react'
import {
  Container,
  Button
} from '../../components'
import { Link } from 'react-router-dom'
import {
  TextField
} from '@material-ui/core'
import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Card } from '@material-ui/core'

//Create a common component for an input field, wrapped in a container for spacing/margin deets

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`

const StyledQuill = styled(ReactQuill)`
  max-width: 500;
  margin: 10;
`

const LeagueTemplate = () => {
  const [ leagueForm, setLeagueForm ] = useState({
    name: "I'm the default Name!",
    location: "",
    day: "",
    price: "",
    image: "",
    descriptionHTML: "",
    disclaimer: "",
    instructions: "",
    coupons: ""
  });

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    const updatedObject = {
      ...leagueForm
    }
    updatedObject[key] = value;
    console.log("updated", updatedObject);
    console.log(event.target.tagName);
    setLeagueForm(updatedObject);
  };

  console.log("final", leagueForm);


  return (
    <Card>
      <Container direction="column">
      <form noValidate autoComplete="off">
        <Container>
          <Container direction="column" justify="flex-start">
          <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
              <Link to={{
                    pathname: `/upload-image`, 
                    state: {
                        url: "none",
                        name: "New League Image",
                        height: "300",
                        width: "300"
                    }
                }}>
                <Button>Add Image</Button>
                </Link>
            </Container>
            <Container>
              <StyledQuill />
            </Container>
          </Container>
          <Container direction="column">
            <Container>
              {leagueForm.name}
              {leagueForm.location}
              Placeholder for 'add to cart' display
            </Container>
            <StyledTextField 
              id="outlined-basic"
              name="name"
              label="League Name" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="location"
              label="Location" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="day"
              label="Day" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="price"
              label="Price" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="disclaimer"
              label="Disclaimer" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="instructions"
              label="Special Instructions" 
              margin="normal"
              onChange={handleChange}
              />
            <StyledTextField 
              id="outlined-basic"
              name="coupons"
              label="Coupons" 
              margin="normal"
              onChange={handleChange}
              />
          </Container>
        </Container>
        <Button>Create League</Button>
        </form>
      </Container>
    </Card>
  );
};

export default LeagueTemplate;
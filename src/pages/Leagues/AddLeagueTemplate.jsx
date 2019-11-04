import React, { useState } from 'react'
import {
  Container,
  Button,
  Text
} from '../../components'
import {
  TextField
} from '@material-ui/core'
import styled from 'styled-components'
import 'react-quill/dist/quill.snow.css'
import { 
  Card, 
  Checkbox, 
  FormControlLabel
} from '@material-ui/core'
import TextEditor from '../../components/TextEditor.jsx'
import ImageUpload from '../ImageUpload/ImageUpload.jsx'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { createLeague } from './LeagueUtil.jsx'

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`

const StyledImage = styled.img`
  width: 400;
  height: 300
  margin: 10;
`;

const LeagueTemplate = () => {
  const [ leagueForm, setLeagueForm ] = useState({
    name: "",
    location: "",
    day: "",
    length: "",
    price: "",
    date: "",
    image: "",
    html: "",
    disclaimer: "Teams that have not met the minimum requirement will be filled with free agents or merged with another team.",
    instructions: "Please include your team name, if you have one already, and your tshirt size. ",
    coupons: "Coupon codes cannot be combined.",
    active: false, 
    selectTeamOption: true,
    selectShirtOption: true
  });

  const [ selectImageView, setSelectImageView ] = useState(false);

  const handleChange = event => {
    const key = event.target.id;
    const value = event.target.value;
    const updatedObject = {
      ...leagueForm
    }
    updatedObject[key] = value;
    console.log("updated", updatedObject);
    setLeagueForm(updatedObject);
  };

  const handleAttachImage = imageUrl => {
    const key = "image";
    const value = imageUrl;
    const updatedObject = {
      ...leagueForm
    }
    updatedObject[key] = value;
    setLeagueForm(updatedObject);
    setSelectImageView(false);
  }

  const handleDateChange = date => {
    const key = "date";
    const value = date;
    const updatedObject = {
      ...leagueForm
    }
    updatedObject[key] = value.toLocaleDateString();
    setLeagueForm(updatedObject);
  }

  const handleCheckBox = event => {
    const checkbox = event.target.value
    const key = checkbox;
    const value = !leagueForm[checkbox];
    const updatedObject = {
      ...leagueForm
    }
    updatedObject[key] = value;
    setLeagueForm(updatedObject);
  }

  const handleCreateLeague = () => {
    createLeague(leagueForm);
  }

  const location = {
    state: {
      url: "none",
      name: "New League Image",
      height: "300",
      width: "300",
      redirect: false
    }
  }

  return (
    <div>
      {
        selectImageView ?
          <ImageUpload location={location} callbackState={leagueForm} callbackFunction={handleAttachImage}/>
        : <Card>
            <Container direction="column">
            <form noValidate autoComplete="off">
              <Container>
                <Container direction="column" justify="flex-start">
                  <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
                    <StyledImage src={leagueForm.image}></StyledImage>
                      <Button onClick={() => {setSelectImageView(true)}}>Add Image</Button>
                  </Container>
                <Container>
                  <TextEditor callbackState={leagueForm} callbackFunction={setLeagueForm}/>
                </Container>
              </Container>
              <Container direction="column" maxw="300" wrap="wrap" margin="5">
                <Container wrap="wrap" direction="column" align="center">
                  <Text>Cart Options</Text>
                  <FormControlLabel
                    value="selectShirtOption"
                    control={
                      <Checkbox
                        color="primary" 
                        checked={leagueForm.selectShirtOption} 
                        onChange={handleCheckBox}
                      />}
                    label="Choose Shirt"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="selectTeamOption"
                    control={
                      <Checkbox 
                        color="primary" 
                        checked={leagueForm.selectTeamOption}
                        onChange={handleCheckBox}
                      />}
                    label="Choose Team"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="active"
                    control={
                      <Checkbox 
                        color="primary" 
                        checked={leagueForm.active}
                        onChange={handleCheckBox}
                      />}
                    label="Open Registration"
                    labelPlacement="end"
                  />
                </Container>
                <DayPickerInput 
                  id="date"
                  onDayChange={handleDateChange} 
                  component={props => <StyledTextField {...props} 
                  label="Start Date"
                  margin="normal"
                  />} 
                />
                <StyledTextField 
                  id="name"
                  label="League Name" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="location"
                  label="Location" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="day"
                  label="Day" 
                  margin="normal"
                  onChange={handleChange}
                  />
                  <StyledTextField 
                  id="length"
                  label="Length" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="price"
                  label="Price" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="disclaimer"
                  label="Disclaimer" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="instructions"
                  label="Special Instructions" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="coupons"
                  label="Coupons" 
                  margin="normal"
                  onChange={handleChange}
                  />
              </Container>
            </Container>
            <Button onClick={handleCreateLeague}>Create League</Button>
            </form>
          </Container>
        </Card>
      }
    </div>
  );
};

export default LeagueTemplate;
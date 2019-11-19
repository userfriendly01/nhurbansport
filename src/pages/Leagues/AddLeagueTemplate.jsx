import React, { useState, useContext } from 'react'
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
import { StateContext } from '../../context/appContext.jsx'

const StyledTextField = styled(TextField)`
  width: 200;
  margin: 20;
`

const StyledImage = styled.img`
  width: 400;
  height: 300
  margin: 10;
`;

const LeagueTemplate = ({ match }) => {
  const context = useContext(StateContext);
  const leagueId = match.params.id;
  const leagues = context.state.leagueContext.leagues;
  const league = leagues.find(obj => obj.sessionId === leagueId) ? leagues.find(obj => obj.sessionId === leagueId) : {};
  const [ leagueForm, setLeagueForm ] = useState({
    name: league.name ? league.name : "",
    location: league.location ? league.location : "",
    day: league.day ? league.day : "",
    length: league.length ? league.length : "",
    price: league.price ? league.price : "",
    date: league.date ? league.date : "",
    image: league.image ? league.image : "",
    html: league.html ? league.html : "",
    disclaimer: league.disclaimer ? league.disclaimer : "",
    instructions: league.instructions ? league.instructions : "",
    coupons: league.coupons ? league.coupons : "",
    active: league.active ? league.active : false, 
    selectTeamOption: league.selectTeamOption ? league.selectTeamOption : true,
    selectShirtOption: league.selectShirtOption ? league.selectShirtOption : true
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

  const handleEditLeague = () => {
    console.log("League was editted yay!");
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
                  <TextEditor value={leagueForm.html} callbackState={leagueForm} callbackFunction={setLeagueForm}/>
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
                  value={leagueForm.date}
                  onDayChange={handleDateChange} 
                  component={props => <StyledTextField {...props} 
                  label="Start Date"
                  margin="normal"
                  />} 
                />
                <StyledTextField 
                  id="name"
                  value={leagueForm.name}
                  label="League Name" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="location"
                  value={leagueForm.location}
                  label="Location" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="day"
                  value={leagueForm.day}
                  label="Day" 
                  margin="normal"
                  onChange={handleChange}
                  />
                  <StyledTextField 
                  id="length"
                  value={leagueForm.length}
                  label="Length" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="price"
                  value={leagueForm.price}
                  label="Price" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="disclaimer"
                  value={leagueForm.disclaimer}
                  label="Disclaimer" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="instructions"
                  value={leagueForm.instructions}
                  label="Special Instructions" 
                  margin="normal"
                  onChange={handleChange}
                  />
                <StyledTextField 
                  id="coupons"
                  value={leagueForm.coupons}
                  label="Coupons" 
                  margin="normal"
                  onChange={handleChange}
                  />
              </Container>
            </Container>
            {
              match.params.id ?
                <Button onClick={handleEditLeague}>Update League</Button>
              :
                <Button onClick={handleCreateLeague}>Create League</Button>
            }
            </form>
          </Container>
        </Card>
      }
    </div>
  );
};

export default LeagueTemplate;
import React, { useState, useContext } from 'react'
import {
  Wrapper,
  Button,
  DisplayCard,
  TextEditor,
  TextField,
  Checkbox,
  DayPicker
} from '../../components'
import styled from 'styled-components'
import ImageUpload from '../ImageUpload/ImageUpload.jsx'
import { 
  createSession,
  updateSession
} from '../../service/Database'
import { StateContext } from '../../context/appContext.jsx'

const StyledImage = styled.img`
  width: 400;
  height: 300;
  margin: 10;
`;

const StyledWrapper = styled(Wrapper)`
  justify-content: flex-start;
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

  const handleCreateLeague = () => {
    createSession(leagueForm);
  }

  const handleEditLeague = () => {
    updateSession(leagueId, leagueForm);
  }

  const location = {
    state: {
      form: true,
      url: "none",
      name: "New League Image",
      height: "300",
      width: "300",
      callbackState: leagueForm,
      callbackFunction: handleAttachImage
    }
  }

  console.log("The League Form: ", leagueForm)
  return (
    <div>
      {
        selectImageView ?
          <ImageUpload location={location} />
        : <DisplayCard>
            <Wrapper direction="column" align="center">
            <form noValidate autoComplete="off">
              <Wrapper>
                <StyledWrapper direction="column">
                  <StyledWrapper direction="column" align="center">
                    <StyledImage src={leagueForm.image}></StyledImage>
                      <Button onClick={() => {setSelectImageView(true)}}>Add Image</Button>
                  </StyledWrapper>
                <Wrapper>
                  <TextEditor html={leagueForm.html} callbackState={leagueForm} callbackFunction={setLeagueForm}/>
                </Wrapper>
              </StyledWrapper>
              <Wrapper direction="column" margin="5">
                <Wrapper wrap="wrap" direction="column" align="center">
                  <p>Cart Options</p>
                  <Checkbox 
                    label="Choose Shirt"
                    form={leagueForm}
                    setForm={setLeagueForm}
                    checked={leagueForm.selectShirtOption}
                    id="selectShirtOption"
                  />
                  <Checkbox 
                    label="Open Registration"
                    form={leagueForm}
                    setForm={setLeagueForm}
                    checked={leagueForm.active}
                    id="active"
                  />
                  <Checkbox 
                    label="Choose Team"
                    form={leagueForm}
                    setForm={setLeagueForm}
                    checked={leagueForm.selectTeamOption}
                    id="selectTeamOption"
                  />
                </Wrapper>
                  <DayPicker
                    label="Start Date"
                    value={leagueForm.date}
                    form={leagueForm}
                    handleChange={date => setLeagueForm({
                      ...leagueForm,
                      date: date.toDateString()
                    })}
                  />
                  <TextField 
                    id="name"
                    label="League Name"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="location"
                    label="Location" 
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="day"
                    label="Day"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="length"
                    label="Length"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="price"
                    label="Price"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="disclaimer"
                    label="Disclaimer"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="instructions"
                    label="Special Instructions"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                  <TextField 
                    id="coupons"
                    label="Coupons"
                    form={leagueForm}
                    setForm={setLeagueForm}
                  />
                </Wrapper>
              </Wrapper>
              {
                match.params.id ?
                  <Button onClick={handleEditLeague}>Update League</Button>
                :
                  <Button onClick={handleCreateLeague}>Create League</Button>
              }
            </form>
          </Wrapper>
        </DisplayCard>
      }
    </div>
  );
};

export default LeagueTemplate;
import React, { useState, useContext } from 'react'
import {
  Checkbox,
  Wrapper,
  Button,
  DisplayCard,
  TextEditor,
  TextField
} from '../../components'
import styled from 'styled-components'
import ImageUpload from '../ImageUpload/ImageUpload.jsx'
// import { 
//   createLeague,
//   editLeague
// } from './LeagueUtil.jsx'
import { createRulebook } from './RulebookUtil.jsx'
import { StateContext } from '../../context/appContext.jsx'

const StyledImage = styled.img`
  width: 400;
  height: 300;
  margin: 10;
`;

const StyledWrapper = styled(Wrapper)`
  justify-content: flex-start;
`;

const RuleBookTemplate = ({ match }) => {
  const context = useContext(StateContext);
  const rulebookId = match.params.id;
  const rulebooks = context.state.adminContext.rulebooks;
  //Hows this work?
  // const rulebook = rulebooks.find(obj => obj.sessionId === rulebookId) ? leagues.find(obj => obj.sessionId === rulebookId) : {};
  const rulebook = {};
  const [ rulebookForm, setRulebookForm ] = useState({
    name: rulebook.name ? rulebook.name : "",
    image: rulebook.image ? rulebook.image : "",
    html: rulebook.html ? rulebook.html : "",
    active: rulebook.active ? rulebook.active : true,
  });

  const [ selectImageView, setSelectImageView ] = useState(false);

  const handleAttachImage = imageUrl => {
    const key = "image";
    const value = imageUrl;
    const updatedObject = {
      ...rulebookForm
    }
    updatedObject[key] = value;
    setRulebookForm(updatedObject);
    setSelectImageView(false);
  }

  const handleCreateRulebook = () => {
    createRulebook(rulebookForm);
    console.log("Rulebook Created!");
  }

  const handleEditRulebook = () => {
    // editLeague(rulebookId, rulebookForm);
    console.log("Rulebook Edited!");
  }

  const location = {
    state: {
      form: true,
      url: "none",
      name: "New Rulebook Image",
      height: "300",
      width: "300",
      callbackState: rulebookForm,
      callbackFunction: handleAttachImage
    }
  }

  return (
    <div>
      {
        selectImageView ?
          <ImageUpload location={location} />
        : <DisplayCard>
            <form noValidate autoComplete="off">
                <StyledWrapper direction="column" align="center">
                  <Wrapper align="baseline">
                    <TextField 
                        id="name"
                        label="Rulebook Name"
                        form={rulebookForm}
                        setForm={setRulebookForm}
                      />
                    <Checkbox 
                      label="Active"
                      form={rulebookForm}
                      setForm={setRulebookForm}
                      checked={rulebookForm.active}
                      id="active"
                    />
                  </Wrapper>
                  <StyledWrapper direction="column" align="center">
                    <StyledImage src={rulebookForm.image}></StyledImage>
                      <Button onClick={() => {setSelectImageView(true)}}>Add Image</Button>
                  </StyledWrapper>
                  <Wrapper>
                    <TextEditor html={rulebookForm.html} callbackState={rulebookForm} callbackFunction={setRulebookForm}/>
                  </Wrapper>
              </StyledWrapper>
              {
                match.params.id ?
                  <Button onClick={handleEditRulebook}>Update RuleBook</Button>
                :
                  <Button onClick={handleCreateRulebook}>Create RuleBook</Button>
              }
            </form>
        </DisplayCard>
      }
    </div>
  );
};

export default RuleBookTemplate;
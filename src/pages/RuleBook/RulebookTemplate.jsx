import React, { useState, useContext } from 'react'
import {
  Checkbox,
  Wrapper,
  Button,
  DisplayCard,
  TextField
} from '../../components'
import styled from 'styled-components'
import ImageUpload from '../ImageUpload/ImageUpload.jsx'
import { 
  createRulebook,
  updateRulebook
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

const RuleBookTemplate = ({ match }) => {
  const context = useContext(StateContext);
  const rulebookId = match.params.id;
  const rulebooks = context.state.adminContext.rulebooks;
  const rulebook = rulebooks.find(obj => obj.rulebookId === rulebookId) ? rulebooks.find(obj => obj.rulebookId === rulebookId) : {};
  const [ rulebookForm, setRulebookForm ] = useState({
    name: rulebook.name ? rulebook.name : "",
    image: rulebook.image ? rulebook.image : "",
    html: rulebook.link ? rulebook.link : "",
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
    createRulebook(rulebookForm).then(() => {
      const newRuleBookArray = rulebooks.push(rulebookForm);
      context.setState({
        ...context.state,
        adminContext: {
          ...context.state.adminContext,
          rulebooks: newRuleBookArray
        }
      });
    });
  }

  const handleEditRulebook = () => {
    updateRulebook(rulebookId, rulebookForm).then(() => {
      const deleteIndex = rulebooks.map(deletedRulebook => { return deletedRulebook.ruleBookId; }).indexOf(rulebookId);
      rulebooks.splice(deleteIndex, 1);
      rulebooks.push(rulebookForm);
      context.setState({
        ...context.state,
        adminContext: {
          ...context.state.adminContext,
          rulebooks: rulebooks
        }
      });
    });
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
                    <TextField 
                          id="link"
                          label="Link"
                          form={rulebookForm}
                          setForm={setRulebookForm}
                      />
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
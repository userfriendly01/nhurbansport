import React, { useState } from 'react'
import {
  Container,
  Button,
  Image
} from '../../components'
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
  
  const [ progress, setProgress ] = useState(0);
  const [ imageArray, setImageArray ] = useState([]);
  const [ temporaryImage, setTemporaryImage ] = useState(
    {
      file: null,
      preview: null
    });
  const [ imageDetails, setImageDetails ] = useState({
    url: "",
    height: "200",
    width: "200"
});

const handleChange = e => {
  const reader = new FileReader();

  if (e.target.files[0]) {
    const tempImage = e.target.files[0];

    reader.onloadend = () => {
      setTemporaryImage({
        file: tempImage.file,
        preview: reader.result
      })
    }
      reader.readAsDataURL(tempImage);
  }
}

const handleUpload = () => {
  const obj = {
      temporaryImage, 
      setProgress, 
      imageArray, 
      setImageArray,
      imageDetails,
      setImageDetails
  };
  uploadImage(obj);
}

console.log(temporaryImage);

  return (
    <Card>
      <Container direction="column">
        <Container>
          <Container direction="column">
          <Container height="100vh" direction="column" align="center" justify="center" margin="0 -50 0 0">
            <img src={temporaryImage.preview}></img>                
            <progress value={progress} max="100"/>
            <input type="file" onChange={handleChange}/>
              {
                temporaryImage != null ?
                <button onClick={() => handleUpload()}>Upload</button>
                : null
              }
            </Container>
            <Container>
              <StyledQuill />
            </Container>
          </Container>
          <Container direction="column">
            <Container>
              Placeholder for 'add to cart' display
            </Container>
            <StyledTextField id="outlined-basic" label="League Name" margin="normal"/>
            <StyledTextField id="outlined-basic" label="Location" margin="normal"/>
            <StyledTextField id="outlined-basic" label="Day" margin="normal"/>
            <StyledTextField id="outlined-basic" label="Price" margin="normal"/>
            <StyledTextField id="outlined-basic" label="disclaimer" margin="normal"/>
            <StyledTextField id="outlined-basic" label="special instructions" margin="normal"/>
            <StyledTextField id="outlined-basic" label="coupons" margin="normal"/>
          </Container>
        </Container>
        <Button>Create League</Button>
      </Container>
    </Card>
  );
};

export default LeagueTemplate;
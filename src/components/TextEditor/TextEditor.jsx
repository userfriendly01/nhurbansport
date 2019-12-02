import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const customModules = {
  toolbar: [
    [{'size': []}],
    [ 'bold', 'italic', 'underline'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'super' }, { 'script': 'sub' }],
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'align': [] }],
    ['link']
]
};

const StyledQuill = styled(ReactQuill)`
  max-width: 600;
  margin: 10;
  height
`

const TextEditor = ({
  callbackState,
  callbackFunction,
  html
}) => {

  const handleChange = event => {
    callbackFunction({
      ...callbackState,
      html: event
    })
  };

  return (
    <StyledQuill
      value={html}
      modules={customModules}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
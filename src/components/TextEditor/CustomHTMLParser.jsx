import React, { useState } from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
  margin: 0px;

`;

const transform = (node, index) => {
  const nodeAttributes = node.attribs ? node.attribs : {};
  let nodeStyle = nodeAttributes.style ? nodeAttributes.style : "";

  if(node.attribs && node.attribs.class === "ql-size-small") {
    node.attribs.style = nodeStyle += " font-size: 13px;";
  }
  if(node.attribs && node.attribs.class === "ql-align-center") {
    node.attribs.style = nodeStyle += " text-align: center;";
  }
  if (node.name === 'p') {
    node.attribs.style = nodeStyle += " margin: 0px;";
    
  }
  return convertNodeToElement(node, index, transform);
};

const options = {
  transform
};

const CustomHTMLParser = ({
  html
}) => {

  const parsedHtml = ReactHtmlParser(html, options);

  return (
    <StyledTextContainer>
      {parsedHtml}
    </StyledTextContainer>
  )
}

export default CustomHTMLParser;

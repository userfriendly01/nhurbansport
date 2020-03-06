import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
  margin: 0px;
`;

const transform = (node, index) => {
  const nodeAttributes = node.attribs ? node.attribs : {};
  const nodeClasses = nodeAttributes.class ? nodeAttributes.class : {};
  let nodeStyle = nodeAttributes.style ? nodeAttributes.style : "";

  switch (nodeClasses) {
    case "ql-size-small": 
      node.attribs.style = nodeStyle += " font-size: 13px;";
      break;
    case "ql-size-large": 
      node.attribs.style = nodeStyle += " font-size: 17px;";
      break;
    case "ql-size-huge": 
      node.attribs.style = nodeStyle += " font-size: 25px;";
      break;
    case "ql-align-center":
      node.attribs.style = nodeStyle += " text-align: center;";
      break;
  }

  switch (node.name) {
    case "p" :
      node.attribs.style = nodeStyle += " margin: 0px;";
      break;
    case "h3" :
        node.attribs.style = nodeStyle += " font-size: 15px;";
        break;
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

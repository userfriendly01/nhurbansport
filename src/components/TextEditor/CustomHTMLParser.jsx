import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
  margin: 0px;

`;

const StyledParagraph = styled.p`
  margin: 0px;
`;

const transform = (node, index) => {
  if(node.attribs && node.attribs.class === "ql-size-small") {
    if (node.attribs.style){
      node.attribs.style = node.attribs.style += " font-size: 13px;";
    } else {
      node.attribs.style = "font-size: 13px;";
    }
    console.log("New Year New Me", node.attribs.style)
    return convertNodeToElement(node, index, transform);
  }
  if (node.name === 'p') {
    node.attribs.style = "margin: 0px";
    return convertNodeToElement(node, index, transform);
  }
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

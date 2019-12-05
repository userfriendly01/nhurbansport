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
    node.attribs.style = "font-size: 13px";
    return convertNodeToElement(node, index, transform);
  }
  if (node.name === 'p') {
    node.attribs.style = "margin: 0px";
    return convertNodeToElement(node, index, transform);
  }
};

const options = {
  decodeEntities: true,
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

import React, { useContext} from 'react'
import {
  Accordion,
  Container,
  IFrame,
  Image,
} from '../../components'
import { StateContext } from '../../context/appContext.jsx'

const HowTo = () => {
  const context = useContext(StateContext);
  const images = context.state.imageContext.imageData;
  const howToDocuments = context.state.documentContext.howToDocuments;

  return (
        <Container direction="column" width="600" margin="0 auto">
            <Container position="relative" margin="10 0 10 0">
                <Image url={images["How To Banner"]}
                       name="How To Banner"
                       height="300"
                       width="650"/>
            </Container>
          <dl className="accordion">
          { 
            howToDocuments.map((document, index) => (
              <div key={`doc${index}`}>
                <Accordion
                  title={document.title}
                  expand={!index}
                  content={
                    <p>
                      <IFrame src={document.source}
                        scrolling="yes"
                        height="200px"
                        width="800px">
                      </IFrame>
                    </p>
                  }
                  bcolor="#2EAEB7"
                />
              </div>
            ))
          }
          </dl>
        </Container>
    )
}

export default HowTo;
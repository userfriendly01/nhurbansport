import React from 'react'
import {
  Accordion,
  Container,
  IFrame,
  Image,
} from '../../components'
import { images } from '../../util/Constants.jsx'
import { getHowToDocuments } from '../../service/Database/Documents.jsx'

const HowTo = () => {

  const howToDocuments = getHowToDocuments();
  console.log(howToDocuments)

  return (
        <Container direction="column" width="600" margin="0 auto">
            <Container position="relative" margin="10 0 10 0">
                <Image url={images.HOWTO.BANNER}
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
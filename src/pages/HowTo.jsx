import React from 'react'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Accordian from '../components/Accordian.jsx'
import IFrame from '../components/IFrame.jsx'
import { images } from '../util/Constants.jsx'
import { getHowToDocuments } from '../util/UtilHelper.jsx'

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
                <Accordian
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
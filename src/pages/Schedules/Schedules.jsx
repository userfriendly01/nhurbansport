import React, { useState } from 'react'
import Container from '../../components/Container.jsx'
import TextContainer from '../../components/TextContainer.jsx'
import Text from '../../components/Text.jsx'
import Image from '../../components/Image.jsx'
import { images } from '../../util/Constants.jsx'
import { getSchedule } from '../../service/Database'

//add image parameter to sessions

const Schedules = () => {
    const [ schedules, setSchedules ] = useState(getSchedule("SESHFLAG062019"));

    return (
        <Container direction="column" width="600" margin="0 auto">
            <Container position="relative" margin="10 0 10 0">
                <Image url={images.SCHEDULE.BANNER}
                    height="200"
                    width="650"/>
            </Container>
          <Container direction="column" align="center">
          {/* { 
            // pages.map((document, index) => (
            //   <div key={index}>
            //     <Container direction="column" bcolor="white" width="450" radius="10px" margin="10">
            //         <TextContainer>
            //             <Text size="24">{document.title}</Text>
            //         </TextContainer>
            //         <Image url={document.image}
            //         height="200"
            //         width="450"/>
            //         <Button> View RuleBook</Button>
            //     </Container>
            //   </div>
            ))
          } */}
          </Container>
        </Container>
    )
}

export default Schedules;
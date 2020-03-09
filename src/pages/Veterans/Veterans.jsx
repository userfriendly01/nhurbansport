import React from 'react'
import {
    Image,
    DisplayCard,
    Button,
    Wrapper,
    TextCard
} from '../../components'

const Veterans = () => {
    const id = "Veterans";

    return (
        <Wrapper direction="column">
          <Wrapper>
            <Image id="Veterans Banner"
            width="650px"
            height="200px">
            </Image>
          </Wrapper>
          <Wrapper>
            <DisplayCard direction="column" width="650" align="left">
              <TextCard id={id} />
              <Button>Join A League</Button>
            </DisplayCard>      
          </Wrapper>
        </Wrapper>
    );
}

export default Veterans;
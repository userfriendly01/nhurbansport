import React from 'react'
import {
    DisplayCard, 
    TextCard,
    Wrapper 
} from '../../components'

const LiabilityWaiver = () => {
    return(
        <Wrapper margin="20" width="750">
          <DisplayCard>
            <TextCard id={"Liability Waiver"} />
          </DisplayCard>
        </Wrapper>
    )
}

export default LiabilityWaiver;
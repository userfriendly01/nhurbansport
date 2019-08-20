import React from 'react'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import Text from '../../components/Text.jsx'
import TextContainer from '../../components/TextContainer.jsx'
import Button from '../../components/Button.jsx'


const Veterans = () => {
    return (
        <div>
            <Container>
                <Image url="/src/images/veterans-banner.jpg"
                       width="650"
                       height="320">
                    <TextContainer top="260" position="relative">
                        <Text size="32" color="white">Veterans</Text>
                    </TextContainer>
                </Image>
            </Container>
            <Container>
                <TextContainer direction="column" width="650" align="left" bcolor="white">
                    <Text color="grey" weight="bold" size="20">Adaptive Recreational Sports for Veterans</Text>
                    <br/>
                    <Text size="15px">Approximately 112,790 veterans live in the Granite State. More than 15 percent of which (16,756) have a service-connected disability. Unfortunately, at this time, there is a lack of recreational outlets for injured and non-injured veterans in southern New Hampshire. Through sports, NH Urban Sport can offer an opportunity to maintain optimum physical health and to increase mental wellbeing through activity and socialization.</Text>
                    <br/>
                    <Text size="15px">According to the Center for Disease Control and Prevention (CDC), “With good health habits and access to health care, many disabilities can be delayed or even prevented… [by] increasing physical activity, and reducing or preventing obesity can eliminate some of the underlying causes of disability.” In fact, the CDC also reports that in most cases, secondary issues like obesity, diabetes and heart disease, all of which are preventable, are a greater problem than the disability itself.</Text>
                    <br/>
                    <Text size="15px" weight="bold">With access to an affordable, accessible, and inclusive athletic and recreational organization like NH Urban Sport, we can begin to make a significant and positive impact in the lives of service members living with disabilities.</Text>
                    <Container><Button>Join A League</Button></Container>
                </TextContainer>
            </Container>
        </div>
    );
}

export default Veterans;
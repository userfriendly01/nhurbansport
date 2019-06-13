import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    max-width: 640px;
    margin-top: 10
`;

const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    max-width: 450px;
    padding: 5;
`;

const AboutText = styled.div`
    padding: 5 10;
    margin: 0 10;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    white-space: pre-line;
`;

const AboutImage = styled.div`
    min-width: 200px;
    min-height: 435px;
    background-image: url("/src/images/about-us-img.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutTextContainer>
                <AboutText size="20" weight="bold">ABOUT US</AboutText>
                <AboutText>__</AboutText>
                <AboutText size="14">NH Urban Sport, LLC is a veteran-owned-and operated, recreational sports organization that provides adaptive sports to disabled veterans and all able-bodied athletes in southern New Hampshire. It's the first organization in the Granite State to offer both adaptive and non-adaptive sports in the area</AboutText>
                <AboutText size="16" weight="bold">Mission</AboutText>
                <AboutText size="14">To provide affordable, inclusive athletic and recreational programming for adults with and without physical disabilities in a positive and empowering environment. </AboutText>
                <AboutText size="16" weight="bold">Vision</AboutText>
                <AboutText size="14">To build an inclusive recreational sports organization not just accommodated for or accessible to veterans with disabilities but rather specifically designed for their unique recreational needs while also engaging the able-bodied public</AboutText>
            </AboutTextContainer>
            <AboutImage/>
        </AboutContainer>
    );
}

export default About;
import React from 'react'
import styled from 'styled-components'

const LiabilityWaiverContainer = styled.div`
    background-color: white;
    max-width: 650px;
    text-align: center;
    margin: 10 0;
`;

const Text = styled.div`
    margin: 15;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    white-space: pre-line;
`;


const LiabilityWaiver = () => {
    return(
        <LiabilityWaiverContainer>
            <Text size="15" >Adult Waiver/Release</Text>
            <Text size="15" weight="normal">RECREATIONAL ATHLETIC WAIVER AND RELEASE OF LIABILITY READ BEFORE ACKNOWLEDGING</Text>
            <Text size="13" weight="bold">__</Text>
            <Text size="13" weight="normal">In consideration of being allowed to participate in any way in the NH Urban Sport athletic sports program, related events and activities, the undersigned acknowledges, appreciates, and understands that:</Text>
            <Text size="13" weight="normal">1. Participating in the activities involved in this program is potentially hazardous, including the potential for serious bodily injury, permanent paralysis and death, some of which may not be foreseeable. While particular rules, equipment, and personal discipline may reduce this risk, the risk of serious injury does exist; and,</Text>
            <Text size="13" weight="normal">2. I agree not to enter in to and participate in NH Urban Sport unless I am medically able. I hereby authorize any medical treatment deemed necessary in the event of any injury while participating in NH Urban Sport activities. I agree to pay all costs of rescue and/or medical services as may be incurred. </Text>
            <Text size="13" weight="normal">3. I am voluntarily participating in NH Urban Sports activities, assume all risks, known and foreseeable or unknown and unforeseeable, associated with participating in the activities, even if arising from the negligence of the releasees or others, and agree to be solely responsible for any injury, loss or damage that I may sustain or cause while participating in NH Urban Sport activities. </Text>
            <Text size="13" weight="normal">4. I grant to the NH Urban Sport, its legal representatives, successors and assigns, the absolute right and permission to take, use, and publish any photographs of my participation in the NH Urban Sport activities and/or related activities, in whole or in part, or composite or distorted in character or form, for any purpose whatsoever. The foregoing permission is given, without restriction as to changes or alterations, in conjunction with my own or a fictitious name, or reproductions thereof, and in any and all media now or hereafter known for illustration, promotion, art, advertising, trade, or any other purpose whatsoever.  I also consent to the use of any printed matter in conjunction therewith.</Text>
            <Text size="13" weight="normal">5. I willingly agree to comply with the stated and customary terms and conditions for participation. If, however, I observe any unusual significant hazard during my presence or participation, I will remove myself from participation and bring such to the attention of the nearest official immediately; and</Text>
            <Text size="13" weight="normal">6. I, for myself and on behalf of my heirs, assigns, personal representatives and next of kin, HEREBY RELEASE AND HOLD HARMLESS NH Urban Sport, their directors, officers, officials, agents, volunteers and/or employees, other participants, sponsoring agencies, sponsors, advertisers, and if applicable, owners and lessors of premises used to conduct the event (“RELEASES”), WITH RESPECT TO ANY AND ALL INJURY, DISABILITY, DEATH, or loss or damage to person or property, WHETHER ARISING FROM THE NEGLIGENCE OF THE RELEASEES OR OTHERWISE, to the fullest extent permitted by law. </Text>
            <Text size="13" weight="bold">I WARRANT THAT I (A) AM AT LEAST EIGHTEEN (18) YEARS OF AGE AND HAVE REACHED THE AGE OF MAJORITY IN THE JURISDICTION IN WHICH I RESIDE, (B) HAVE READ THIS RELEASE OF LIABILITY AND ASSUMPTION OF RISK AGREEMENT CAREFULLY PRIOR TO AGREEING TO THE TERMS HEREIN AND FULLY UNDERSTAND ITS CONTENT, (C) AM AWARE THAT THESE TERMS AND CONDITIONS INCLUDE A WAIVER AND RELEASE OF LIABILITY AND IS AN ENFORCEABLE LEGAL DOCUMENT BETWEEN MYSELF AND NH URBAN SPORT, AND (D) AM SIGNING OF MY OWN FREE WILL. </Text>
        </LiabilityWaiverContainer>
    )
}

export default LiabilityWaiver;
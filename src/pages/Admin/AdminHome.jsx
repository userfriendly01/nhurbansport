import React, { useState } from 'react'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import TextContainer from '../../components/TextContainer.jsx';
import Text from '../../components/Text.jsx';
import AdminPlayers from '../Admin/AdminPlayers.jsx'
import AdminSummary from '../Admin/AdminSummary.jsx'
import AdminSchedules from '../Admin/AdminSchedules.jsx'
import AdminTeams from '../Admin/AdminTeams.jsx'


const AdminHome = () => {
    const [view, updateView] = useState(<AdminSummary/>);

    return (
        <Container direction="column">
            <Image url="/src/images/admin-home-banner.jpg"
                           width="650"
                           height="250"/>
            <Container direction="row">
                <Container direction="column">
                    <TextContainer>
                        <Text onClick={() => updateView(<AdminPlayers/>)}>Players</Text>
                        <Text onClick={() => updateView(<AdminTeams/>)}>Teams</Text>
                        <Text onClick={() => updateView(<AdminSchedules/>)}>Schedules</Text>
                    </TextContainer>
                </Container>
                <Container id="admin-view">
                    {view}
                </Container>
            </Container>
        </Container>
    )

}

export default AdminHome;
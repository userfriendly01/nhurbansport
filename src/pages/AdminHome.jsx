import React from 'react'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Button from '../components/Button.jsx'
import { getDatabase, getAllPlayers, test } from '../util/Connect.jsx'
import getPlayersOnTeam from '../service/Player.jsx'

const AdminHome = () => {
    return (
        <Container direction="column">
            <Image url="/src/images/admin-home-banner.jpg"
                           width="650"
                           height="250"/>
            <Container direction="row">
                <div>I'm a side nav</div>
                <div>I'm the working space</div>
            </Container>
            <Button onClick={getDatabase}>Log The Database</Button>
            <Button onClick={getAllPlayers}>Get All Players</Button>
            <Button onClick={test}>Get Players on PoundTown</Button>
        </Container>
    )

}

export default AdminHome;
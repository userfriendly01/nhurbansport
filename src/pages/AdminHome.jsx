import React from 'react'
import Container from '../components/Container.jsx'
import Image from '../components/Image.jsx'
import Button from '../components/Button.jsx'
import { logDatabase, test } from '../util/Connect.jsx'
import { getPlayersOnTeam, getAllPlayers, addPlayer, deletePlayer } from '../service/Player.jsx'

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
            <Button onClick={logDatabase}>Log The Database</Button>
            <Button onClick={getAllPlayers}>Get All Players</Button>
            <Button onClick={getPlayersOnTeam}>Get All Players on Pound Town</Button>
            <Button onClick={addPlayer}>Add Player</Button>
            <Button onClick={deletePlayer}>Delete Player</Button>
            <Button onClick={test}>Test Function</Button>
        </Container>
    )

}

export default AdminHome;
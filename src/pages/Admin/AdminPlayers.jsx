import React from 'react'
import Button from '../../components/Button.jsx'
import Container from '../../components/Container.jsx'
import { logDatabase, test } from '../../util/Connect.jsx'
import { getAllPlayers, addPlayer, deletePlayer } from '../../service/Player.jsx'

const AdminPlayers = () => {
    return (
        <Container direction="column">
            <Button onClick={logDatabase}>Log The Database</Button>
            <Button onClick={getAllPlayers}>Get All Players</Button>
            <Button onClick={addPlayer}>Add Player</Button>
            <Button onClick={deletePlayer}>Delete Player</Button>
            <Button onClick={test}>Test Function</Button>
        </Container>
    );
}

export default AdminPlayers;
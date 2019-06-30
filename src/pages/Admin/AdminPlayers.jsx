import React from 'react'
import Button from '../../components/Button.jsx'
import { logDatabase, test } from '../../util/Connect.jsx'
import { getAllPlayers, getPlayersOnTeam, addPlayer, deletePlayer } from '../../service/Player.jsx'

const AdminPlayers = () => {
    return (
        <div>
            I'm going to show player information!
        </div>
    );
}

export default AdminPlayers;
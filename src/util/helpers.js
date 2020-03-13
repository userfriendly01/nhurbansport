export const formatTeamsForContext = teams => {
  let teamsArray = []
  for(let t in teams) {
    let teamObject = {...teams[t]};
    let teamId = t;
    teamObject.teamId = teamId;
    teamsArray.push(teamObject);
  }
  return teamsArray;
}

export const formatScheduleForContext = schedule => {
  let scheduleObject = {...schedule};
  let scheduleGroups = schedule.groups
  let groupsArray = []
  for(let sch in scheduleGroups) {
    let groupObject = {...scheduleGroups[sch]};
    let groupId = sch;
    groupObject.groupId = groupId;

    let games = groupObject.games;
    let gamesArray = []
    for(let g in games) {
      let gameObject = {...games[g]};
      let gameId = g;
      gameObject.gameId = gameId;
      gamesArray.push(gameObject);
    }
    groupObject.games = gamesArray;
    groupsArray.push(groupObject);
  }

  scheduleObject.groups = groupsArray;
  return scheduleObject;
}

export const formatScheduleForDatabase = schedule => {
  let formattedGroupsObject = {};
  if(schedule.groups){
    schedule.groups.map(group => {
      let formattedGamesObject = {}
      if(group.games) {
        group.games.map(game => {
          formattedGamesObject[game.gameId] = game;
        })
      }
      const formattedGroupObject = {
        date: group.date,
        label: group.label,
        games: formattedGamesObject
      }
      formattedGroupsObject[group.groupId] = formattedGroupObject;
    })
  }

  const formattedSchedule = {
    ...schedule,
    groups: formattedGroupsObject
  }
  return formattedSchedule;
}

export const getPlayersByTeam = (players, teamId) => {
  const filteredPlayers = [];

  players.map(player => {
    const teams = player.teams ? player.teams : [];
    teams.map(team => {
      if(team.teamId === teamId){
        filteredPlayers.push(player);
      }
    })
  })

  return filteredPlayers;
}

export const getPlayersBySession = (players, sessionId) => {
  const filteredPlayers = [];

  players.map(player => {
    const teams = player.teams;
    teams.map(team => {
      if(team.sessionId === sessionId){
        filteredPlayers.push(player);
      }
    })
  })

  return filteredPlayers;
}

//Create logic within signup for option to be Free Agent - Team ID always equals free-agent
export const getFreeAgentsForSession = (players, sessionId) => {
  const filteredPlayers = [];
    players.map(player => {
      const teams = player.teams;
      teams.map(team => {
        if(team.sessionId === sessionId && team.teamId === "free-agent"){
          filteredPlayers.push(player);
        }
      })
    })
  return filteredPlayers;
}


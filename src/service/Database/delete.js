import { getDatabase } from "../connect.js";

const database = getDatabase();

export const deleteRulebook = (id, context) => {
  return database
    .ref("Admin")
    .child(id)
    .remove().then(() => {
      const rulebooks = context.state.adminContext.rulebooks
      const index = rulebooks.map(rulebook => { return rulebook.rulebookId; }).indexOf(id);
      groups.splice(index, 1);
      context.setState({
        ...context.state,
        adminContext: {
          ...context.state.adminContext,
          rulebooks
        }
      });
      console.log("Rulebook Successfully Deleted! ");
      return true;
    }).catch(error => {
      console.error("Failed to delete rulebook. ", error);
    });
}

export const deleteSession = (id, context) => {
  return database
    .ref("Sessions")
    .child(id)
    .remove().then(() => {
      const leagues = context.state.leagueContext.leagues
      const index = leagues.map(league => { return league.sessionId; }).indexOf(id);
      leagues.splice(index, 1);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Session Successfully Deleted! ");
      return true;
    }).catch(error => {
      console.error("Failed to delete session. ", error);
    });
}

export const deleteTeam = (sessionId, teamId, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("teams")
    .child(teamId)
    .remove().then(() => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const teams = league.teams ? league.teams : [];
      const teamIndex = teams.map(team => { return team.teamId; }).indexOf(teamId);
      teams.splice(teamIndex, 1);
      league.teams = teams;
      const leagueIndex = leagues.map(league => { return league.sessionId; }).indexOf(sessionId);
      leagues.splice(leagueIndex, 1);
      leagues.splice(leagueIndex, 0, league);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Team Successfully Deleted! ");
      return true;
    }).catch(error => {
      console.error("Failed to delete team. ", error);
    });
}

export const deleteSchedule = (sessionId, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .remove().then(() => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      delete league.schedule;
      const index = leagues.map(league => { return league.sessionId; }).indexOf(sessionId);
      leagues.splice(index, 1);
      leagues.splice(index, 0, league);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Schedule Successfully Deleted! ");
      return true;
    }).catch(error => {
      console.error("Failed to delete schedule. ", error);
    });
}

export const deleteScheduleGroup = (sessionId, groupId, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .child("groups")
    .child(groupId)
    .remove().then(() => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const schedule = league.schedule ? league.schedule : {};
      const groups = schedule.groups ? schedule.groups : [];
      const groupIndex = groups.map(group => { return group.groupId; }).indexOf(groupId);
      groups.splice(groupIndex, 1);

      league.schedule.groups = groups;
      const leagueIndex = leagues.map(league => { return league.sessionId; }).indexOf(sessionId);
      leagues.splice(leagueIndex, 1);
      leagues.splice(leagueIndex, 0, league);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Schedule Group Successfully Deleted!");
      return true;
    }).catch(error => {
      console.error("Failed to delete schedule group. ", error);
    });
}

export const deleteGame = (sessionId, groupId, gameId, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .child("groups")
    .child(groupId)
    .child("games")
    .child(gameId)
    .remove().then(deletedGame => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const schedule = league.schedule ? league.schedule : {};
      const groups = schedule.groups ? schedule.groups : [];
      const group = groups.find(obj => obj.groupId === groupId);
      const games = group.games ? group.games : [];
      const gameIndex = games.map(game => { return game.gameId; }).indexOf(gameId);
      games.splice(gameIndex, 1);

      group.games = games;
      const groupIndex = groups.map(deletedGroup => { return deletedGroup.groupId; }).indexOf(groupId);
      groups.splice(groupIndex, 1);
      groups.splice(groupIndex, 0, group);

      league.schedule.groups = groups;
      const leagueIndex = leagues.map(deletedLeague => { return deletedLeague.sessionId; }).indexOf(sessionId);
      leagues.splice(leagueIndex, 1);
      leagues.splice(leagueIndex, 0, league);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          leagues
        }
      });
      console.log("Game Successfully Deleted! ", teamId);
      return deletedGame.val();
    }).catch(error => {
      console.error("Failed to delete game. ", error);
    });
}
import { getDatabase } from "../connect.js";

const database = getDatabase();

export const createRulebook = (newRulebook, context) => {
  return database
    .ref("Admin")
    .child("Rulebooks")
    .push(newRulebook).then(rulebookSnapshot => {
      const rulebooks = context.state.adminContext.rulebooks
      rulebooks.push(newRulebook);
      context.setState({
        ...context.state,
        adminContext: {
          ...context.state.adminContext,
          rulebooks
        }
      });
      console.log("Rulebook Created! ", snapshot.key, newRulebook);
      return rulebookSnapshot.key;
    }).catch(error => {
      console.error("Failed to Create Rulebook. ", error);
    });
}

export const createSession = (newSession, context) => {
  return database
    .ref("Sessions")
    .push(newSession).then(sessionSnapshot => {
      const sessions = context.state.leagueContext.leagues
      sessions.push(newSession);
      context.setState({
        ...context.state,
        leagueContext: {
          ...context.state.leagueContext,
          sessions
        }
      });
      console.log("Session Created! ", snapshot.key, newSession);
      return sessionSnapshot.key;
    }).catch(error => {
      console.error("Failed to Create Session. ", error);
    });
}

export const createTeam = (sessionId, newTeam, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("teams")
    .push(newTeam).then(snapshot => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const teams = league.teams ? league.teams : [];
      newTeam.teamId = snapshot.key;
      teams.push(newTeam);
      league.teams = teams;
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
      console.log("Team Created! ", snapshot.key, newTeam);
      return snapshot.key;
    }).catch(error => {
      console.error("Failed to Create Team. ", error);
    });
}

export const createScheduleGroup = (sessionId, newScheduleGroup, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .child("groups")
    .push(newScheduleGroup).then(snapshot => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const schedule = league.schedule ? league.schedule : {};
      const groups = schedule.groups ? schedule.groups : [];
      groups.push({
        ...newScheduleGroup,
        groupId: snapshot.key
      });

      league.schedule = league.schedule ? league.schedule : {};
      league.schedule.groups = groups;
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
      console.log("Schedule Group Created! ", snapshot.key, newScheduleGroup);
      return snapshot.key;
    }).catch(error => {
      console.error("Failed to Create new Schedule Group. ", error);
    });
}

export const createGame = (sessionId, groupId, newGame, context) => {
  return database
    .ref("Sessions")
    .child(sessionId)
    .child("schedule")
    .child("groups")
    .child(groupId)
    .child("games")
    .push(newGame).then(snapshot => {
      const leagues = context.state.leagueContext.leagues
      const league = leagues.find(obj => obj.sessionId === sessionId);
      const schedule = league.schedule ? league.schedule : {};
      const groups = schedule.groups ? schedule.groups : [];
      const group = groups.find(obj => obj.groupId === groupId);
      const games = group.games ? group.games : [];
      games.push({ 
        ...newGame,
        gameId: snapshot.key
      });
      group.games = games;
      const groupIndex = groups.map(group => { return group.groupId; }).indexOf(groupId);
      groups.splice(groupIndex, 1);
      groups.splice(groupIndex, 0, group);

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
      console.log("Game Created! ", snapshot.key, newGame);
      return snapshot.key;
    }).catch(error => {
      console.error("Failed to Create new Game. ", error);
    });
}
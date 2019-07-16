import { filterSessionsForRoster } from '../service/Session.jsx'
import { filterTeams } from '../service/Team.jsx'

export const setData = () => {
    filterSessionsForRoster();
}

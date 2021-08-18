import { getApplicationData} from "../dataAccess.js";




export const findWinner = ()=>{
    const selectedTeams = getApplicationData("transientState")
    const teams = getApplicationData("teams")

    const teamsUpdated = selectedTeams.sort((a, b) => {
        return b.score - a.score
    })

    let winnerScore = teamsUpdated.map((teamWin)=>{
        const teamName = teams.find(team => team.id === teamWin.teamId)
        return teamName
    })

                            
    console.log(winnerScore[0].name)
}
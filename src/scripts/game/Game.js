import { getApplicationData} from "../dataAccess.js";




export const findWinner = ()=>{
    const selectedTeams = getApplicationData("transientState")
    const teams = getApplicationData("teams")
    
    const teamsUpdated = selectedTeams.sort((a, b) => {
        return b.score - a.score
    })
    
    const tieGame = array => array.every(val => val.score ===array[0].score)
    const result = tieGame(selectedTeams)
    
    if (result === true) {
        console.log("it's a tie")
    } else {

        let winnerScore = teamsUpdated.map((teamWin)=>{
            const teamName = teams.find(team => team.id === teamWin.teamId)
            return teamName
        })
        console.log(winnerScore[0].name)
    }


                            
}
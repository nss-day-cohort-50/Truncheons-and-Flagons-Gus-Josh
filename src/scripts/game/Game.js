import { getApplicationData} from "../dataAccess.js";




export const findWinner = ()=>{
    const selectedTeams = getApplicationData("transientState")
    const teams = getApplicationData("teams")
    let winnerHeader = null
    const teamsUpdated = selectedTeams.sort((a, b) => {
        return b.score - a.score
    })

    let winnerScore = teamsUpdated.map((teamWin)=>{
        const teamName = teams.find(team => team.id === teamWin.teamId)
        const index = teamsUpdated.findIndex(x => x.teamId ===teamWin.teamId)

        if (index === 0){
            winnerHeader = `${teamName.name} is the WINNER!`
            return `<tr class="table-success"><td>${teamName.name}</td><td>${teamWin.score}</td></tr>`
        }else{
            return `<tr class="table-danger"><td>${teamName.name}</td><td>${teamWin.score}</td></tr>`
        }
        
    }).join("")
    let htmlString = `<h3>${winnerHeader}</h3>
                             <table class="table">
                                 <tr><th>Team</th><th>Score</th>
                                 ${winnerScore}
                             </table>`
                            
    console.log(winnerScore[0].name)
    return htmlString
}
// export const finalScores = ()=>{
//     const selectedTeams = getApplicationData("transientState")
//     const teams = getApplicationData("teams")
//     let teamsUpdated = (selectedTeams.length > 0) ? selectedTeams.map((selectedTeam)=>{
//         const teamName = teams.find(team => team.id === selectedTeam.teamId)
//         return `<tr><td>${teamName.name}</td><td>${selectedTeam.score}</td></tr>`
//     }).join("") : `<tr><td><h4> Select Teams </h4></td></tr>`
//     let htmlString = `<h3>Current Game</h3>
//                             <table class="table table-info">
//                                 <tr><th>Team</th><th>Score</th>
//                                 ${teamsUpdated}
//                             </table>`

//     return htmlString
// }
import { getApplicationData, postData } from "../dataAccess.js";


export const liveScoreBoard = ()=>{
    const selectedTeams = getApplicationData("transientState")
    const teams = getApplicationData("teams")
    let teamsUpdated = (selectedTeams.length > 0) ? selectedTeams.map((selectedTeam)=>{
        const teamName = teams.find(team => team.id === selectedTeam.teamId)
        return `<tr><td>${teamName.name}</td><td>${selectedTeam.score}</td></tr>`
    }).join("") : `<tr><td><h4> Select Teams </h4></td><td></td></tr>`
    let htmlString = `<h3>Current Game</h3>
                            <table class="table table-success">
                                <tr><th>Team</th><th>Score</th>
                                ${teamsUpdated}
                            </table>`

    return htmlString
}

export const postScores = ()=>{
    const teams = getApplicationData("transientState")
    for (const team of teams) {
        postData("scores", team)
    }
}
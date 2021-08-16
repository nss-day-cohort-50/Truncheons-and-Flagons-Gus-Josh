import { getApplicationData } from "../dataAccess.js";


export const liveScoreBoard = ()=>{
    const selectedTeams = getApplicationData("transientState")
    let teamsUpdated = (selectedTeams.length > 0) ? selectedTeams.map((team)=>{
        return `<tr><td>${team.name}</td><td>${team.score}</td></tr>`
    }).join("") : `<tr><td><h4> Select Teams </h4></td></tr>`
    let htmlString = `<h3>Current Game</h3>
                            <table>
                                <tr><th>Team</th><th>Score</th>
                                ${teamsUpdated}
                            </table>`

    return htmlString
}
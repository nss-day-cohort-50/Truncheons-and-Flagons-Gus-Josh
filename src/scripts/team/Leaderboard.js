import { getApplicationData } from "../dataAccess.js";

const teamScore = (arr)=>{
    let totalScore = 0
    for (const item of arr){
        totalScore += item.score
    }
    return totalScore
}
export const LeaderBoardHtml = () =>{
    const teams = getApplicationData("teams")
    const scores = getApplicationData("scores")
    const players = getApplicationData("players")
    let html = `<h3>Leaderdoard</h3>
                    <table id='leaderboard'>
                        <tr><th>Teams</th><th>Players</th><th>Total Scores</th></tr>
                        ${teams.map(team => {
                            return `<tr><td>${team.name}</td><td>${players.filter(player => {
                                return player.teamId === team.id}).length}</td><td>${teamScore(scores.filter(score => score.teamId === team.id))}</td></tr>`
                        })}
                    </table>`

    return html
}
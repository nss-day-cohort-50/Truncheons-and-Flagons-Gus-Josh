import { addToTransientState, getApplicationData, resetTransientState, setTransientHTML } from "../dataAccess.js";
import { postScores } from "../score/Scores.js";
const gameContainer = document.querySelector("#containerTwo")
export const Rounds = (num)=>{
    const selectedTeams = getApplicationData("transientState")
    const allTeams = getApplicationData("teams")
    
    const roundOneTwo = `<h1>Round ${num}</h1>
            ${selectedTeams.map(team =>{
                const foundTeam = allTeams.find((foundTeam)=>{
                    return foundTeam.id === team.teamId})
                return `
                <label for="team${team.teamId}">${foundTeam.name}</label><br>
                <input name="team${team.teamId}"type="number" id="teamscore--${team.teamId}"><br><br>`}).join("")}
            <button id="nextRoundButton" class="btn btn-outline-primary btn-lg">Next Round</button>
            `
    const lastRound = `<h1>Final Round</h1>
                        ${selectedTeams.map(team => {
                            const foundTeam = allTeams.find((foundTeam) => {
                                return foundTeam.id === team.teamId
                            })
                            return `
                            <label for="team${team.teamId}">${foundTeam.name}</label><br>
                            <input name="team${team.teamId}"type="number" id="teamscore--${team.teamId}"><br><br>`
                        }).join("")}
                        <button id="finalRound" class="btn btn-outline-primary btn-lg">Finish Game</button>`
    if (num <3){
        return roundOneTwo
    }else{
        return lastRound
    }
}
export const ScoreAdder = ()=>{
    const selectedTeams = getApplicationData("transientState")
    const selectedTeamsScore = selectedTeams.map((team)=>{
        const roundScore = gameContainer.querySelector(`#teamscore--${team.teamId}`).value
        team.score += parseInt(roundScore)
        return team
    })
    selectedTeamsScore.map((team)=>{
        addToTransientState(team)
    })
    

}
gameContainer.addEventListener("click",
    (event)=>{
        if (event.target.id === "nextRoundButton"){
            ScoreAdder()
            setTransientHTML()
        }else if (event.target.id === "finalRound"){
            ScoreAdder()
            setTransientHTML()
            postScores()
            resetTransientState()
        }
    })
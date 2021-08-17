import { addToTransientState, getApplicationData, resetTransientState, setTransientHTML } from "../dataAccess.js";
import { postScores } from "../score/Scores.js";
const gameContainer = document.querySelector("#containerTwo")
export const Rounds = (num)=>{
    const selectedTeams = getApplicationData("transientState")
    const allTeams = getApplicationData("teams")
    
    const roundOneTwo = `<h1>Truncheons and Flagons</h1>
    <h2>Round ${num}</h2>
            ${selectedTeams.map(team =>{
                const foundTeam = allTeams.find((foundTeam)=>{
                    return foundTeam.id === team.teamId})
                return `
                <label for="team${team.teamId}">${foundTeam.name}</label><br>
                <input name="team${team.teamId}"type="number" id="teamscore--${team.teamId}"><br><br>`}).join("")}
            <button id="nextRoundButton">Next Round</button>
            `
    const lastRound = `<h1>Truncheons and Flagons</h1>
    <h2>Final Round</h2>
                        ${selectedTeams.map(team => {
                            const foundTeam = allTeams.find((foundTeam) => {
                                return foundTeam.id === team.teamId
                            })
                            return `
                            <label for="team${team.teamId}">${foundTeam.name}</label><br>
                            <input name="team${team.teamId}"type="number" id="teamscore--${team.teamId}"><br><br>`
                        }).join("")}
                        <button id="finalRound">Finish Game</button>`
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
            
            const selectedTeams = getApplicationData("transientState")
            const score1 = gameContainer.querySelector(`#teamscore--${selectedTeams[0].teamId}`).value
            const score2 = gameContainer.querySelector(`#teamscore--${selectedTeams[1].teamId}`).value
            const score3 = gameContainer.querySelector(`#teamscore--${selectedTeams[2].teamId}`).value
            let totalScore = parseInt(score1) + parseInt(score2) + parseInt(score3)
            if (totalScore > 3){
                window.alert("Only 3 points per round are allowed")
            }else{
                ScoreAdder()
                setTransientHTML()
                
            }
        }else if (event.target.id === "finalRound"){
            const selectedTeams = getApplicationData("transientState")
            const score1 = gameContainer.querySelector(`#teamscore--${selectedTeams[0].teamId}`).value
            const score2 = gameContainer.querySelector(`#teamscore--${selectedTeams[1].teamId}`).value
            const score3 = gameContainer.querySelector(`#teamscore--${selectedTeams[2].teamId}`).value
            let totalScore = parseInt(score1) + parseInt(score2) + parseInt(score3)
            if (totalScore > 3){
                window.alert("Only 3 points per round are allowed")
            }
        else{
            ScoreAdder()
            setTransientHTML()
            postScores()
            resetTransientState()

        }
        }
    })
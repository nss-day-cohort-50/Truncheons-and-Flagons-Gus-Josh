import { addToTransientState, getApplicationData, getGameState, getSelectedTeam, setObject, setSelectedTeam, setTransientHTML } from "../dataAccess.js"
import { postData } from "../dataAccess.js"


const gameContainer = document.querySelector("#containerTwo")
const mainContainer = document.querySelector("#container")
export const SelectTeam = () => {
    const teams = getApplicationData("teams")
    
    return `
    <h2> Pick teams </h2>
    <form id="teamSelector">
    <select name="team1" id="firstTeamSelector" class="form-select">
                        <option value="" selected disabled hidden>Choose Team 1</option>
                        ${teams.map((team)=>{
                            if (getSelectedTeam("selectedTeamOne") > 0){
                                if (getSelectedTeam("selectedTeamOne") === team.id){
                                    return `<option selected value="${team.id}">${team.name}</option>`
                                }else{
                                    `<option value="${team.id}">${team.name}</option>`   
                                }
                            }else{
                                return `<option value="${team.id}">${team.name}</option>`
                            }
                            }).join("")}
                    </select>
    <select name="team2" id="secondTeamSelector" class="form-select">
                    <option value="" selected disabled hidden>Choose Team 2</option>
                    ${teams.map((team)=>{
                        if (getSelectedTeam("selectedTeamTwo") > 0){
                            if (getSelectedTeam("selectedTeamTwo") === team.id){
                                return `<option selected value="${team.id}">${team.name}</option>`
                            }else{
                                `<option value="${team.id}">${team.name}</option>`   
                            }
                        }else{
                            return `<option value="${team.id}">${team.name}</option>`
                        }
                        }).join("")}
                </select>
    <select name="team3" id="thirdTeamSelector" class="form-select">
                <option value="" selected disabled hidden>Choose Team 3</option>
                ${teams.map((team)=>{
                    if (getSelectedTeam("selectedTeamThree") > 0){
                        if (getSelectedTeam("selectedTeamThree") === team.id){
                            return `<option selected value="${team.id}">${team.name}</option>`
                        }else{
                            `<option value="${team.id}">${team.name}</option>`   
                        }
                    }else{
                        return `<option value="${team.id}">${team.name}</option>`
                    }
                    }).join("")}
            </select>
    </form>

    `
}

gameContainer.addEventListener("change",
    (event)=>{
        const gameState = getGameState()
        if (gameState === 1){
            if (event.target.name === "team1"){
                const userFirstTeam = gameContainer.querySelector("#firstTeamSelector").value
                
                const activeTeams = {
                    "teamId": parseInt(userFirstTeam),
                    "score": 0
                   
                }
                addToTransientState(activeTeams)
                setSelectedTeam(1, parseInt(userFirstTeam))
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }}

        })

gameContainer.addEventListener("change",
    (event)=>{
        const gameState = getGameState()
        if (gameState === 1){

            if (event.target.name === "team2"){
                const userSecondTeam = gameContainer.querySelector("#secondTeamSelector").value
                // const firstTeamName = () => {
                //     teams.map(team => {if (team.id === parseInt(userFirstTeam)){
                //         return team.name
                //     }})}
                
                // const teamName = firstTeamName()
                const activeTeams = {
                    "teamId": parseInt(userSecondTeam),
                    "score": 0
                   
                }
                addToTransientState(activeTeams)
                setSelectedTeam(2, parseInt(userSecondTeam))
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }}
        })

gameContainer.addEventListener("change",
    (event)=>{
        const gameState = getGameState()
        if (gameState === 1){
            if (event.target.name === "team3"){
                const userThirdTeam = gameContainer.querySelector("#thirdTeamSelector").value
                // const firstTeamName = () => {
                //     teams.map(team => {if (team.id === parseInt(userFirstTeam)){
                //         return team.name
                //     }})}
                
                // const teamName = firstTeamName()
                const activeTeams = {
                    "teamId": parseInt(userThirdTeam),
                    "score": 0
                   
                }
                addToTransientState(activeTeams)
                setSelectedTeam(3, parseInt(userThirdTeam))
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                setTransientHTML()
            }
        }
        })


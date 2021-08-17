import { getApplicationData, setObject } from "../dataAccess.js"
import { postData } from "../dataAccess.js"


const gameContainer = document.querySelector("#containerTwo")
const mainContainer = document.querySelector("#container")
export const SelectTeam = () => {
    const teams = getApplicationData("teams")
    return `
    <h2> Pick teams </h2>
    <select name="team1" id="firstTeamSelector">
                        <option value="" selected disabled hidden>Choose Team 1</option>
                        ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                    </select>
    <select name="team2" id="secondTeamSelector">
                    <option value="" selected disabled hidden>Choose Team 2</option>
                    ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                </select>
    <select name="team3" id="thirdTeamSelector">
                <option value="" selected disabled hidden>Choose Team 3</option>
                ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
            </select>

    `
}

gameContainer.addEventListener("change",
    (event)=>{
        if (event.target.name === "team1"){
            const userFirstTeam = gameContainer.querySelector("#firstTeamSelector").value
            // const firstTeamName = () => {
            //     teams.map(team => {if (team.id === parseInt(userFirstTeam)){
            //         return team.name
            //     }})}
            
            // const teamName = firstTeamName()
            const activeTeams = {
                "teamId": parseInt(userFirstTeam),
               
            }
            setObject(activeTeams)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }})

gameContainer.addEventListener("change",
    (event)=>{
        if (event.target.name === "team2"){
            const userSecondTeam = gameContainer.querySelector("#secondTeamSelector").value
            // const firstTeamName = () => {
            //     teams.map(team => {if (team.id === parseInt(userFirstTeam)){
            //         return team.name
            //     }})}
            
            // const teamName = firstTeamName()
            const activeTeams = {
                "teamId": parseInt(userSecondTeam),
               
            }
            setObject(activeTeams)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }})

gameContainer.addEventListener("change",
    (event)=>{
        if (event.target.name === "team3"){
            const userThirdTeam = gameContainer.querySelector("#thirdTeamSelector").value
            // const firstTeamName = () => {
            //     teams.map(team => {if (team.id === parseInt(userFirstTeam)){
            //         return team.name
            //     }})}
            
            // const teamName = firstTeamName()
            const activeTeams = {
                "teamId": parseInt(userThirdTeam),
               
            }
            setObject(activeTeams)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            secondContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }})


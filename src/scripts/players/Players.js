import { getApplicationData } from "../dataAccess.js";

const mainContainer = document.querySelector("#container")
export const playersHTML = ()=>{
    const teams = getApplicationData("teams")
    const players = getApplicationData("players")
    const scores = getApplicationData("scores")
    let html = `<h3>New Player</h3>
                <form id="playerCreation">
                    <input type="text" id="playerFirstName" placeholder="First Name"><br>
                    <input type="text" id="playerLastName" placeholder="Last Name"><br>
                    <select name="teams" id="teamSelector">
                        ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                    </select><br>
                    <button id="createPlayer">Add Player</button>
                </form>`
    return html
}

mainContainer.addEventListener("click",
    (event)=>{
        if (event.target.id === "createPlayer"){
            
        }
    })
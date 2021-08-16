import { TeamForm } from "./team/Teams.js"

import { playersHTML } from "./players/Players.js"



const mainContainer = document.querySelector("#container")


export const Truncheons = () => {
    return `
    <h1>Truncheons and Flagons</h1>
    <section class="playerForm">
    <h2>Player Form</h2>
        ${playersHTML()}
    </section>

    <section class="teamForm">
        <h2>Team Form</h2>
        ${TeamForm()}
    </section>

    <section class="teamSelect">
    <button class="button" id="startGame">Start Game</button>
    </section>
    ` 
}
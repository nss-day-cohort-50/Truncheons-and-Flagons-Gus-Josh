import { playerForm } from "./Players.js"
import { teamForm } from "./Teams.js"



const mainContainer = document.querySelector("#container")


export const Truncheons = () => {
    return `
    <h1>Truncheons and Flagons</h1>
    <section class="playerForm">
    <h2>Player Form</h2>
        ${playerForm()}
    </section>

    <section class="teamForm">
        <h2>Team Form</h2>
        ${teamForm()}
    </section>
    ` 
}
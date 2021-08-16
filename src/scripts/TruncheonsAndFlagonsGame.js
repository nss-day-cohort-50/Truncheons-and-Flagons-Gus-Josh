import { SelectTeam } from "./game/TeamSelect.js"
export const GameHTML = ()=>{
    return `
    <section class="teamForm">
        <h2>Team Form</h2>
        ${SelectTeam()}
    </section>

    <section class="teamSelect">
    
    <button class="button" id="startGame">Start Game</button>
    </section>
    `
}
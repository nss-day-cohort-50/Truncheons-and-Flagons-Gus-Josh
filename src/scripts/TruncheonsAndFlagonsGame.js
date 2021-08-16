import { SelectTeam } from "./game/TeamSelect.js"


export const GameHTML = ()=>{
    return `
    <section class="teamForm">
        <h2>Team Form</h2>
    </section>

    <section class="teamSelect">
    
    <button class="button" id="startGame">Start Game</button>
    </section>
    `
}

const gameContainer = document.querySelector("#containerTwo")

gameContainer.addEventListener("click", click => {
    if (click.target.id === "startGame") {
        gameContainer.innerHTML = `${SelectTeam()}`
        
    }
})
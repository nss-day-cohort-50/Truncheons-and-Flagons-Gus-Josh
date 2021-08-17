import {  getGameState, setTransientHTML } from "./dataAccess.js"
import { SelectTeam } from "./game/TeamSelect.js"
import { Rounds } from "./game/Round.js"

const startGameButton = ()=>{
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
const gameTracker = ()=>{
    const gameState = getGameState()
    let html = null
    switch (gameState){
        case 0: return html = startGameButton()
        break;
        case 1: return html = SelectTeam()
        break;
        case 2: return html = Rounds(1)
        break;
        case 3: return html = Rounds(2)
        break;
        case 4: return html = Rounds(3)
        //round 3 after round is done reset gameState to 0 and display alert box that shows who won, then update transient state with scores then push scores to JSON
        break
    }
    return html
}
export const GameHTML = ()=>{
    return gameTracker()
}





gameContainer.addEventListener("click", click => {
    if (click.target.id === "startGame") {
        setTransientHTML()
        
        
    }
})
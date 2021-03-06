import {  getGameState, setTransientHTML } from "./dataAccess.js"
import { SelectTeam } from "./game/TeamSelect.js"
import { Rounds } from "./game/Round.js"
import { Results } from "./game/resultsPopUp.js"

const startGameButton = ()=>{
    return `<h1>Truncheons and Flagons</h1>
    <section class="teamForm">
    </section>
    
    <section class="teamSelect">
    
    <button class="btn btn-outline-primary btn-lg" id="startGame">Start Game</button>
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
        case 5: return html = Results()
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
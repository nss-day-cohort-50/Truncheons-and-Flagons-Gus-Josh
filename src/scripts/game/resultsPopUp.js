import { setTransientHTML,resetTransientState } from "../dataAccess.js"
import { finalScores,  postScores } from "../score/Scores.js"
const secondContainer = document.querySelector("#containerTwo")
export const Results = ()=>{
    return `
    <div class="modal"id="modalOne">
        <div class="modal-header">
            <div class="title">ExampleModal</div>
            <button data-close-button id="totalsClose"class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            ${finalScores()}
        </div>
    </div>
    <div id="overlay" class=""></div>`
}


secondContainer.addEventListener("click",
    (event)=>{
        if (event.target.id === "totalsClose"){
            document.getElementById("modalOne").classList.remove("active")
            document.getElementById("overlay").classList.remove("active")
            setTransientHTML()
            postScores()
            resetTransientState()
        }
    })
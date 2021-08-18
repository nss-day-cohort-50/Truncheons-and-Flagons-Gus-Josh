import { setTransientHTML,resetTransientState } from "../dataAccess.js"
import {   postScores } from "../score/Scores.js"
import { findWinner } from "./Game.js"
const secondContainer = document.querySelector("#containerTwo")
export const Results = ()=>{
    const winner = findWinner()
    if (winner !== undefined){

        return `
        <div class="modal active"id="modalOne">
            <div class="modal-header">
                <div class="title">FINAL SCORES!</div>
                <button data-close-button id="totalsClose"class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                ${winner}
            </div>
        </div>
        <div id="overlay" class="active"></div>`
    }else {
        return `
        <div class="modal"id="modalOne">
            <div class="modal-header">
                <div class="title">FINAL SCORES!</div>
                <button data-close-button id="totalsClose"class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                
            </div>
        </div>
        <div id="overlay" class=""></div>`
    }
    
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
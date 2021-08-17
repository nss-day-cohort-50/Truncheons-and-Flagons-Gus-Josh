import { TeamForm } from "./team/Teams.js"

import { playersHTML } from "./players/Players.js"
import { LeaderBoardHtml } from "./team/Leaderboard.js"
import { liveScoreBoard } from "./score/Scores.js"



const mainContainer = document.querySelector("#container")


export const Truncheons = () => {
    return `
    <h1>Truncheons and Flagons</h1>
    <section class="playerForm  input-group-sm mb-3">
    <h2>Create Player</h2>
        ${playersHTML()}
    </section>

    <section class="teamForm ">
        <h2>Team Form</h2>
        ${TeamForm()}
    </section>
    ${liveScoreBoard()}
    
    <section class="leaderboard">
        ${LeaderBoardHtml()}
    </section>
    ` 
}
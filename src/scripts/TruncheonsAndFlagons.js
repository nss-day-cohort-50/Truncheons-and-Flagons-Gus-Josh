import { TeamForm } from "./team/Teams.js"

import { playersHTML } from "./players/Players.js"
import { LeaderBoardHtml } from "./team/Leaderboard.js"
import { liveScoreBoard } from "./score/Scores.js"



const mainContainer = document.querySelector("#container")


export const Truncheons = () => {
    return `
    <article class="data">
        <section class="form ">
        <h2>Create Player</h2>
            ${playersHTML()}
        </section>

        <section class="form" >
            <h2>Create Team</h2>
            ${TeamForm()}
        </section>
        <section class="form">
        ${liveScoreBoard()}
        </section>
        <section class="form leaderboard">
            ${LeaderBoardHtml()}
        </section>
    </article>
    ` 
}
import { getApplicationData } from "../dataAccess.js";

export const Rounds = (num)=>{
    const teams = getApplicationData("transientState")
    return `<h1>Round ${num}</h1>
            ${teams.map(team =>{
                return `
                <label for="teamOne">${team.name}</label>
                <input name="teamOne"type="number" id="teamscore--${team.id}">`}).join("")}
            `
}
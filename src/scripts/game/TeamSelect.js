import { getApplicationData } from "../dataAccess.js"

export const teamDropdown = () => {
    const teams = getApplicationData("teams")
    return `
        <option>Pick a Team</option>
        <select name="team" id="teamSelector">
                        ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                    </select>`
}

export const SelectTeam = () => {
    const teams = getApplicationData("teams")
    return `
    <h2> Pick teams </h2>
    <select name="team" id="teamSelector">
                        ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                    </select>
    <select name="team" id="teamSelector">
                    ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
                </select>
    <select name="team" id="teamSelector">
                ${teams.map((team)=>{return `<option value="${team.id}">${team.name}</option>`}).join("")}
            </select>

    `
}
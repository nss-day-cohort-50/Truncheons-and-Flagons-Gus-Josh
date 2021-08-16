import { Truncheons } from "./TruncheonsAndFlagons.js"


const applicationState = {
    teams: [],
    players:[],
    scores:[]
}
const mainContainer = document.querySelector("#container")
const API = "http://localhost:8088"
export const fetchData = ()=>{
    const teamsFetch = fetch("http://localhost:8088/teams")
    const playersFetch = fetch("http://localhost:8088/players")
    const scoresFetch = fetch("http://localhost:8088/scores")
    Promise.all([teamsFetch,playersFetch,scoresFetch])
    .then(values =>{return Promise.all(values.map(r => r.json()))})
    .then(([teams,players,scores])=> {
            applicationState.teams = teams
            applicationState.players = players
            applicationState.scores = scores
        }).then(()=> mainContainer.innerHTML = Truncheons())
}

export const postData = (resource, object)=>{
    const fetchOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }
    return fetch(`${api}/${resource}`, fetchOptions)
        .then(response => response.json())
        .then(() =>{
            mainContainer.dispatchEvent(new CustomeEvent("stateChanged"))
        })
}
export const getApplicationData = (resource)=>{
    const specificResource = resource
    return applicationState[`${specificResource}`].map((object)=>({...object}))
}
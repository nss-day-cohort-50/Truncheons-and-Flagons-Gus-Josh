import { Truncheons } from "./TruncheonsAndFlagons.js"
import { GameHTML } from "./TruncheonsAndFlagonsGame.js"


const applicationState = {
    teams: [],
    players:[],
    scores:[],
    transientState: []
}
const mainContainer = document.querySelector("#container")
const secondContainer = document.querySelector("#containerTwo")
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
        }).then(()=> {
            mainContainer.innerHTML = Truncheons()
            secondContainer.innerHTML = GameHTML()})
}

export const postData = (resource, object)=>{
    const fetchOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }
    return fetch(`${API}/${resource}`, fetchOptions)
        .then(response => response.json())
        .then(() =>{
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const getApplicationData = (resource)=>{
    
    return applicationState[resource].map((object)=>({...object}))
}
export const setObject= (object) =>{
    return applicationState.transientState.push(object)
}
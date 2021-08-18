import { Truncheons } from "./TruncheonsAndFlagons.js"
import { GameHTML } from "./TruncheonsAndFlagonsGame.js"


const applicationState = {
    teams: [],
    players:[],
    scores:[],
    transientState: [],
    selectedTeamOne: 0,
    selectedTeamTwo: 0,
    selectedTeamThree: 0,
    transientStateHTML: 0,
    //currentGame: {}
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
            secondContainer.innerHTML =  GameHTML()
        })
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
export const SpliceObject = (num) => applicationState.transientState.splice(num, 1)
export const addToTransientState = (object)=>{
    if (applicationState.transientState.length >= 0){
        if (applicationState.transientState.some((item)=>item.teamId === object.teamId)){
            const index = applicationState.transientState.findIndex(x => x.teamId === object.teamId)
            SpliceObject(index)
            setObject(object)
            console.log(applicationState.transientState)
            return
        }else{
            setObject(object)
            console.log(applicationState.transientState)
            return
        }
    }
}
export const setTransientHTML = ()=>{
    if (applicationState.transientStateHTML <5){
        applicationState.transientStateHTML ++
        secondContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }else{
        applicationState.transientStateHTML = 0
        secondContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
}
export const getGameState = ()=>{
    return applicationState.transientStateHTML
}
export const resetTransientState = ()=>{
    return applicationState.transientState = []
}
export const getSelectedTeam = (selection)=>{
    return applicationState[selection]
}
export const setSelectedTeam = (num, teamId)=>{
    switch (num){
        case 1: applicationState.selectedTeamOne = teamId
        break;
        case 2: applicationState.selectedTeamTwo = teamId
        break;
        case 3: applicationState.selectedTeamThree = teamId
        break;
    }
}
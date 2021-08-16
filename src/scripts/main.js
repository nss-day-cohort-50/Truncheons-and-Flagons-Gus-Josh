import {  } from "./dataAccess.js"
import {  } from "./TruncheonsAndFlagons.js"


const mainContainer = document.querySelector("#container")

const render = () => {

    
    mainContainer.innerHTML =  empty //name of function exported from TruncheonsAndFlagons.js

}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
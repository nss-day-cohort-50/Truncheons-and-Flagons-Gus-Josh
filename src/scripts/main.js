import { fetchData } from "./dataAccess.js"
import {  } from "./TruncheonsAndFlagons.js"


const mainContainer = document.querySelector("#container")

const render = () => {

    
    fetchData()

}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
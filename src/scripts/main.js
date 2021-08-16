import { fetchData } from "./dataAccess.js"
import { GameHTML } from "./TruncheonsAndFlagonsGame.js"


const mainContainer = document.querySelector("#container")
const mainContainerTwo = document.querySelector("#containerTwo")
const render = () => {

    
    fetchData()
    
}

render()

mainContainer.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
mainContainerTwo.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
import { fetchData } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {

    
    fetchData()

}

render()

mainContainer.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
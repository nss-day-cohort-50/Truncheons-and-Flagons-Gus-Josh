import { getApplicationData, postData } from "../dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
        // Get what the user typed into the form fields
        const userTeamName = document.querySelector("input[name='teamName']").value
        

        const team = getApplicationData("teams")
        const userTeamId = team.length + 1

        // Make an object out of the user input
        const dataToSendToAPI = {
            id: userTeamId,
            name: userTeamName
          
        }

        // Send the data to the API for permanent storage
        postData("teams",dataToSendToAPI)
        
    }
})


export const TeamForm = () => {
    let html = `
            <div class="field">
                <label class="label" for="teamName">Team Name</label>
                <input type="text" name="teamName" class="input" />
            </div>
            
    
            <button class="button" id="submit">Add Team</button>
        `

    return html
}
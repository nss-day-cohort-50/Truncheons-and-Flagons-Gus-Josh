import { getApplicationData, postData } from "../dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
        // Get what the user typed into the form fields
        const userTeamName = document.querySelector("input[name='teamName']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userTeamName
          
        }

        // Send the data to the API for permanent storage
        postData("teams",dataToSendToAPI)
        
    }
})


export const TeamForm = () => {
    let html = `
            <form>
                
                <input type="text" name="teamName" class="form-control" placeholder="Team Name"/>
            </div>
            
    
            <button class="btn btn-outline-primary btn-lg form-control" id="submit">Add Team</button>
            </form>
        `

    return html
}
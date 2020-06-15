import {entryFactory, save} from "./createEntry.js"
import API from "../journalData.js"
import journalList from "./journalList.js"

let saveObject = {}

const journalConverter = (journalObject) => {
    const journalHTMLRepresentation = ` <section class="entry">
    <h1>${journalObject.Concepts}</h1>
    <p> 
        ${journalObject.Content}<br>
        ${journalObject.Date}<br>
        Mood: <strong>${journalObject.Mood}</strong>
    </p>
    </section>`

    
    
    return journalHTMLRepresentation
}

const saveButton = document.querySelector(".saveButton")



saveButton.addEventListener("click", clickEvent => {
    const dateEntry = document.querySelector(".journalDate")
    const conceptsEntry = document.querySelector(".journalConcepts")
    const contentEntry = document.querySelector(".journalContent")
    const moodEntry = document.querySelector(".journalMood")
        if (contentEntry.value.length < 250) {
            if (dateEntry.value !== "" && conceptsEntry.value !== "" && contentEntry.value !== "" && moodEntry.value !== "") {
                saveObject = entryFactory(dateEntry.value, conceptsEntry.value, contentEntry.value, moodEntry.value)
                save.saveJournalEntry(saveObject)
            } else {
                alert("All Inputs must be filled out to save an entry!")
            }

        } else {
            alert("You have exceeded the maximum number of characters in the content box. Maximum of 500")
        }     
    })





export default journalConverter
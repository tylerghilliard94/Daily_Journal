import {entryFactory, save} from "./createEntry.js"
import API from "../journalData.js"
import {journalList, filterConfirmation, selectionList} from "./journalList.js"

let saveObject = {}

const journalConverter = (journalObject) => {
    const journalHTMLRepresentation = ` <section class="entry">
    <h1>${journalObject.Concepts}</h1>
    <p> 
        ${journalObject.Content}<br>
        ${journalObject.Date}<br>
        Mood: <strong>${journalObject.moods.mood}</strong>
    </p>
    <button type="submit" name="delete-buttons" value="delete--${journalObject.id}">Delete</button>
    <button name="edit--button" value="editEntry--${journalObject.id}">Edit Entry</button>
    </section>`

    
    
    return journalHTMLRepresentation
}

const selectionConverter = (selection) => {
    const selectionHTMLRepresentation = `
        <option value="${selection.mood}">${selection.mood}</option>`

        return selectionHTMLRepresentation
                      
}

const clearTheDom = () => {
    const dateEntry = document.querySelector(".journalDate")
    const conceptsEntry = document.querySelector(".journalConcepts")
    const contentEntry = document.querySelector(".journalContent")
    const moodEntry = document.querySelector(".journalMood")
    const hiddenEventId = document.querySelector("#entryId")
    dateEntry.value = ""
    conceptsEntry.value = ""
    contentEntry.value = ""
    moodEntry.value = "sad"
}

const saveButton = document.querySelector(".saveButton")



saveButton.addEventListener("click", clickEvent => {
    const dateEntry = document.querySelector(".journalDate")
    const conceptsEntry = document.querySelector(".journalConcepts")
    const contentEntry = document.querySelector(".journalContent")
    const moodEntry = document.querySelector(".journalMood")
    const hiddenEventId = document.querySelector("#entryId")
    if (hiddenEventId.value !== "") {
        API.editJournalEntries(hiddenEventId.value, moodEntry.value, filterConfirmation)
        clearTheDom()
    }else {
        if (contentEntry.value.length < 250) {
            if (dateEntry.value !== "" && conceptsEntry.value !== "" && contentEntry.value !== "" && moodEntry.value !== "") {
                let saveObject = entryFactory(dateEntry.value, conceptsEntry.value, contentEntry.value, moodEntry.value)
                save.saveJournalEntry(saveObject)
                clearTheDom()
            } else {
                alert("All Inputs must be filled out to save an entry!")
            }

        } else {
            alert("You have exceeded the maximum number of characters in the content box. Maximum of 500")
        } 
        
        

    }
})  





export {journalConverter, selectionConverter}
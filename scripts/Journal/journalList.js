import {journalConverter, selectionConverter} from "./journal.js"
import API from "../journalData.js"
let filterConfirmation = false
const updateFormFields = (entryID) => {
    const hiddenEntryId = document.querySelector("#entryId")
    const entryDateInput = document.querySelector(".journalDate")
    const entryConceptsInput = document.querySelector(".journalConcepts")
    const entryContentInput = document.querySelector(".journalContent")
    const entryMoodInput = document.querySelector(".journalMood")

    fetch(`http://localhost:8088/entries/${entryID}?_expand=moods`)
        .then(response => response.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            entryDateInput.value = entry.Date
            entryConceptsInput.value = entry.Concepts
            entryContentInput.value = entry.Content
            entryMoodInput.value = entry.moods.mood
        })

}


const selectionList = (selections) => {
    const selectionElement = document.querySelector(".journalMood")
for (let select of selections) {
    const selectionHTML = selectionConverter(select)

    
    selectionElement.innerHTML += selectionHTML
}
}
const journalList = (allEntries, filtered) => {
    const journalArticleElement = document.querySelector(".entryLog")
    journalArticleElement.innerHTML = ""
    if(filtered === "yes"){
        filterConfirmation = true
    } else {
        filterConfirmation = false
    }
    for (const currentJournalObject of allEntries) {
        const journalHTML = journalConverter(currentJournalObject)
    
        
        journalArticleElement.innerHTML += journalHTML
    }
    const deleteButton = document.getElementsByName("delete-buttons")
    deleteButton.forEach(button => {
        button.addEventListener("click", clickEvent => {
            
            if(clickEvent.target.value.startsWith("delete--")) {
                let target = clickEvent.target.value.split("--")[1]
                API.deleteJournalEntries(target).then(() => {
                    return API.getJournalEntries()
                    
                }).then((response) => {
                    if(filtered ==="yes"){
                        let filteredJournal = response.filter(filter => {
                            return filter.Mood === allEntries[0].Mood})

                        journalList(filteredJournal, "yes")
                    }else {
                        journalList(response, "no")
                    }
                    })
            }
    })})

    const editButton = document.getElementsByName("edit--button")
    editButton.forEach(button => {
    button.addEventListener("click", clickEvent => {
        if (clickEvent.target.value.startsWith("editEntry--")) {
            const entryIdToEdit = clickEvent.target.value.split("--")[1]
    
            
            updateFormFields(entryIdToEdit)
        }
    })
})
}






export {journalList, filterConfirmation, selectionList}

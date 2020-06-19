import API from "./journalData.js"
import journalList from "./Journal/journalList.js"


var journalDataArray = [
]

API.getJournalEntries().then((response) => {
    journalDataArray = response 
    return response}).then((response) => journalList(response))


let radioButton = document.getElementsByName("mood")

radioButton.forEach(button => {
    button.addEventListener("click", event => {
    let mood = event.target.value
    API.getJournalEntries().then((response) => {
        let filteredJournal = response.filter(filter => {
            return filter.Mood === mood
        })
        return filteredJournal
    }).then((filtered) => journalList(filtered, "yes"))
    
    

    
})})

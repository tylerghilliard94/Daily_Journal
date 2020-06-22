import API from "./journalData.js"
import {journalList, filterConfirmation} from "./Journal/journalList.js"


var journalDataArray = [
]

API.getJournalEntries().then((response) => {
    journalDataArray = response 
    return response}).then((response) => journalList(response))


let radioButton = document.getElementsByName("moods")

radioButton.forEach(button => {
    button.addEventListener("click", event => {
    let mood = event.target.value
    
    API.getJournalEntries().then((response) => {
        if(mood === "Full List"){
            journalList(response, "no")
        }else{
            let filteredJournal = response.filter(filter => {
                return filter.Mood === mood
            })
                journalList(filteredJournal, "yes")
            
           
        }
        
    })
    

    
})})

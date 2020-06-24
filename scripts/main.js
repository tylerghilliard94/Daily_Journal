import API from "./journalData.js"
import {journalList, filterConfirmation, selectionList} from "./Journal/journalList.js"


var journalDataArray = [
]

API.getSelectionEntries().then((response) => selectionList(response))


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
                return filter.moods.mood === mood
            })
                journalList(filteredJournal, "yes")
        }
    })
})})

let searchBar = document.querySelector("#entry__search")

searchBar.addEventListener("keypress", enterEvent  => {
    let search = searchBar.value
    if(enterEvent.key === "Enter" && search === ""){
        API.getJournalEntries().then((response) => journalList(response))
    }else if(enterEvent.key === "Enter"){
        API.getJournalEntries().then((response) => {
            let searchArray = response.filter(filter => {
                let filterValue = false
                for(let value of Object.values(filter)){
                    if(typeof value === "string"){
                        if(value.includes(search)){
                            filterValue = true
                            return filterValue
                        }
                    }else{
                        if(value == search){
                            filterValue = true
                            return filterValue
                        }
                    }
                    
                }
                return filterValue
            })
            return searchArray
    }).then((searchFilter) => journalList(searchFilter))
    }
})
    
    
    

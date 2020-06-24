
import {save, entryFactory} from "./Journal/createEntry.js"
import {journalList,filterConfirmation, selectionList} from "./Journal/journalList.js"


const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries?_expand=moods")
        .then(response => response.json()) 
   
},
    getSelectionEntries () {
        return fetch("http://localhost:8088/moods")
        .then(response => response.json())
},
    deleteJournalEntries(target) {
        return fetch(`http://localhost:8088/entries/${target}`, {
            method: "DELETE"
        })
},
    editJournalEntries (id, mood, filtered) {
       

        fetch(`http://localhost:8088/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryFactory(document.querySelector(".journalDate").value, 
            document.querySelector(".journalConcepts").value, 
            document.querySelector(".journalContent").value,
            document.querySelector(".journalMood").value))
        })
        .then(response => response.json())
        .then(() => {
            document.querySelector("#entryId").value = ""
        }).then(() => API.getJournalEntries())
        .then((response) => {
            if(filtered === true){
                let filteredJournal = response.filter(filter => {
                    return filter.mood.moods === mood})

                journalList(filteredJournal, "yes")
            }else {
                journalList(response, "no")
            }
    })
}
}
export default API



import {journalList,filterConfirmation} from "./Journal/journalList.js"


// const getJournalData = () => {
//     return fetch("http://localhost:8088/entries").then(
//         (response) => {
//             return response.json()
//         }
//     )
//     .then(
//         (arrayOfEntries) => {
//             journalDataArray = arrayOfEntries
//         }
//     )
// }

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json()) 
   
},
    deleteJournalEntries(target) {
        return fetch(`http://localhost:8088/entries/${target}`, {
            method: "DELETE"
        })
},
    editJournalEntries (id, mood, filtered) {
        const updatedObject = {
            Date: document.querySelector(".journalDate").value,
            Concepts: document.querySelector(".journalConcepts").value,
            Content: document.querySelector(".journalContent").value,
            Mood: document.querySelector(".journalMood").value
        }

        fetch(`http://localhost:8088/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(response => response.json())
        .then(() => {
            document.querySelector("#entryId").value = ""
        }).then(() => API.getJournalEntries())
        .then((response) => {
            if(filtered === true){
                let filteredJournal = response.filter(filter => {
                    return filter.Mood === mood})

                journalList(filteredJournal)
            }else {
                journalList(response)
            }
    })
}
}
export default API

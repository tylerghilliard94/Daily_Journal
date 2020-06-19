

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
    }
}

export default API

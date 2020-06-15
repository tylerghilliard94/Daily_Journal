var journalDataArray = [

]

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
    }
}

export default API
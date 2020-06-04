var journalDataArray = [

]

const getJournalData = () => {
    return fetch("http://localhost:8088/entries").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfEntries) => {
            journalDataArray = arrayOfEntries
        }
    )
}
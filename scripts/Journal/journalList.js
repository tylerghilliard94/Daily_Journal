import journalConverter from "./journal.js"

const journalList = (allEntries) => {

    for (const currentJournalObject of allEntries) {
        const journalHTML = journalConverter(currentJournalObject)
    
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}

export default journalList
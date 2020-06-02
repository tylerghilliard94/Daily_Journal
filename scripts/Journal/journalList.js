const journalList = () => {

    for (const currentJournalObject of journalDataArray) {
        const journalHTML = journalConverter(currentJournalObject)
    
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTML
    }
}
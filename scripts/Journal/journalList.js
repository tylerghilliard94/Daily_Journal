import journalConverter from "./journal.js"
import API from "../journalData.js"


const journalList = (allEntries, filtered) => {
    const journalArticleElement = document.querySelector(".entryLog")
    journalArticleElement.innerHTML = ""
    for (const currentJournalObject of allEntries) {
        const journalHTML = journalConverter(currentJournalObject)
    
        
        journalArticleElement.innerHTML += journalHTML
    }
    const deleteButton = document.getElementsByName("delete-buttons")
    deleteButton.forEach(button => {
        button.addEventListener("click", clickEvent => {
            
            if(clickEvent.target.value.startsWith("delete--")) {
                let target = clickEvent.target.value.split("--")[1]
                API.deleteJournalEntries(target).then(() => {
                    return API.getJournalEntries()
                    
                }).then((response) => {
                    if(filtered ==="yes"){
                        let filteredJournal = response.filter(filter => {
                            return filter.Mood === allEntries[0].Mood})

                        journalList(filteredJournal)
                    }else {
                        journalList(response)
                    }
                    })
            }
    })})
}

export default journalList
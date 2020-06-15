import API from "../journalData.js"
import journalList from "./journalList.js"

const entryFactory = (date, concepts, content, mood) => {
    return {
        "Date": date,
        "Concepts": concepts,
        "Content": content,
        "Mood": mood
    }
}

const save = {
    saveJournalEntry: (newEntry) => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }).then(() => API.getJournalEntries()).
        then((response) => journalList(response))
    }
}



export {save, entryFactory}
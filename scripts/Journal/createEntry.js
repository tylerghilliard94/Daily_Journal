import API from "../journalData.js"
import {journalList, filterConfirmation, selectionList} from "./journalList.js"

const entryFactory = (date, concepts, content, mood) => {
    let convertedMood = ""
    if(mood === "sad"){
        convertedMood = 1
    }else if(mood === "happy"){
        convertedMood = 2
    }else if(mood === "angry"){
        convertedMood = 3
    }else if(mood === "anxious"){
        convertedMood = 4
    }else if(mood ==="depressed"){
        convertedMood = 5
    }
    return {
        "Date": date,
        "Concepts": concepts,
        "Content": content,
        "moodsId": convertedMood
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
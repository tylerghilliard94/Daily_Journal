import API from "./journalData.js"
import journalList from "./Journal/journalList.js"

API.getJournalEntries().then((response) => journalList(response))
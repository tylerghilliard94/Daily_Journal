const deleteEntry = {
    deleteJournalEntry: (newEntry) => {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "Delete"})
    }
}
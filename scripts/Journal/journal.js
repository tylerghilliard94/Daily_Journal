const journalConverter = (journalObject) => {
    const journalHTMLRepresentation = ` <section class="entry">
    <h1>${journalObject.Concepts}</h1>
    <p> 
        ${journalObject.Content}<br>
        ${journalObject.Date}<br>
        Mood: <strong>${journalObject.Mood}</strong>
    </p>
    </section>`
    return journalHTMLRepresentation
}

export default journalConverter
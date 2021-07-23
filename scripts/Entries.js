/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getEntries } from "./database.js"

export const Entries = () => {
    const entries = getEntries()
    const allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
           <h3>${entry.concepts} </h3>
           <p>${entry.text}</p>
         

        `
    }

    return allEntriesAsHTML
}

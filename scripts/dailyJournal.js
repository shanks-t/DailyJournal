import { Entries } from "./Entries.js"


// Keep your existing imports and add the new import for the form function

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>
    `
}

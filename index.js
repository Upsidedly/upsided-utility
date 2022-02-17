export const string = {
    /**
    * A capitalization function, due to JavaScript's lack of one.
    * @param {string} input 
    * @returns {string} The capitalized string, if capitalized.
    */
    toTitleCase = (await import('./functions/cap')).default,
}

export const array = {
    /**
     * Removes all duplicates in the array.
     * @param {any[]} arr
     * The array you want to remove the duplicates from.
     * @returns {any[]} Non-Duplicate Array
     */
    unique = (arr) => [...new Set(arr)]
}
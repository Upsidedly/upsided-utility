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

export const number = {
    /**
     * Checks if a number is even.
     * @param {number} num
     * The number to check if even
     * @returns {boolean}
     * If the number is even or not
     */
    isEven: num => num % 2 === 0,
    /**
     * Returns the average of an array of numbers (parameters)
     * @param {number[]} numbers
     * The numbers to retrieve the average of
     * @returns {number}
     * The average of the numbers
     */
    average: (numbers) => numbers.reduce((a, b) => a + b) / numbers.length,
    /**
     * Reverses a string (Emoji support)
     * @param {string} str
     * The string to reverse
     * @returns {string}
     * The reversed string
     */
    reverse: str => Array.from(str.normalize('NFC')).reverse().join('')
}
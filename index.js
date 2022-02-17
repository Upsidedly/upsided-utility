import { createRequire } from 'module';
const require = createRequire(import.meta.url)

export const string = {
    /**
    * A capitalization function, due to JavaScript's lack of one.
    * @param {string} input 
    * @returns {string} The capitalized string, if capitalized.
    */
    toTitleCase: require('./functions/cap.js').default,
    /**
     * Reverses a string (Emoji support)
     * @param {string} str
     * The string to reverse
     * @returns {string}
     * The reversed string
     */
     reverse: str => Array.from(str.normalize('NFC')).reverse().join(''),
}

export const array = {
    /**
     * Removes all duplicates in the array.
     * @param {any[]} arr
     * The array you want to remove the duplicates from.
     * @returns {any[]} Non-Duplicate Array
     */
    unique: (arr) => [...new Set(arr)],
    /**
     * Returns the average of an array of numbers
     * @param {number[]} numbers 
     * The array of numbers to get the average of
     * @returns {number}
     * The average of the array of numbers
     */
    average: (numbers) => numbers.reduce((a, b) => a + b) / numbers.length,
    /**
     * Checks if an array is empty
     * @param {any[]} arr
     * The array to check
     * @returns {boolean}
     * If array is empty
     */
    isEmpty: arr => !Array.isArray(arr) || arr.length < 1,
    /**
     * Shuffles the array
     * @param {any[]} arr
     * The array to shuffle
     * @returns {any[]}
     * The shuffled array
     */
    shuffle: arr => arr.sort(() => 0.5 - Math.random)
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
}

export const color = {
    /**
     * Convert RGB to HEX
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @returns {string}
     * The string of the hexidecimal format of the RGB values given
     */
    hex: (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1),
    /**
     * Get a random hexidecimal color
     * @returns {string}
     * The hex code string
     */
    randomHex: () => `#${Math.random().toString(16).slice(2, 8)}`
}
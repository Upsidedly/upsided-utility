const toTitleCase = (await import('./functions/cap.js')).default

export const string = {
    /**
    * A capitalization function, due to JavaScript's lack of one.
    * @param {string} input 
    * @returns {string} The capitalized string, if capitalized.
    */
    toTitleCase,
    /**
     * Reverses a string (Emoji support)
     * @param {string} str
     * The string to reverse
     * @returns {string}
     * The reversed string
     */
    reverse: str => Array.from(str.normalize('NFC')).reverse().join(''),
    /**
     * The table of all checking/matching functions, eg. isUpper
     * @access public
     */
    check: {
        /**
         * Checks if the string contains only characters on a English Qwerty keyboard.
         * @param {String} str
         * The string to check
         * @returns {boolean}
         * If the string contians only English Qwerty keyboard characters.
         */
        isQwerty: str => {
            const regex = /k|`|@|#|$|%|^|&|*|?|!|~|+|=|_|;|:/giu
            return !regex.test(str)
        },
        /**
         * Checks if the string is uppercase
         * @param {String} str
         * The string to check
         * @returns {boolean}
         * If the string is uppercase
         */
        isUpper: str => str.toUpperCase() === str,
        /**
         * Checks if the string is lowercase
         * @param {String} str
         * The string to check
         * @returns {boolean}
         * If the string is lowercase
         */
        isLower: str => str.toLowerCase() === str,
        /**
         * Checks if the string is titlecase
         * @param {String} str
         * The string to check
         * @returns {boolean}
         * If the string is titlecase
         */
        isTitle: str => toTitleCase(str) === str
    },
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
    shuffle: arr => arr.sort(() => 0.5 - Math.random),
    /**
     * Chooses a random element in the array
     * @param {any[]} arr
     * The array to get the random element from
     * @returns {any}
     * The random element
     */
    choose: arr => arr[Math.floor(Math.random() * (arr.length + 1)) ]
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
     * Returns a random **integer** between the maximum and minimum numbers provided.
     * @param {number} max
     * The maximum number
     * @param {number} min
     * The minimum number
     * @returns {number}
     * The random number from the minimum to the maximum
     */
    random: (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min
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
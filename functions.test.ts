const {shuffleArray} = require('./utils')

let {array,arrCopy} = shuffleArray

describe('shuffleArray should', () => {
    test('Should check that the items types are the same at index 1', () => {
        expect(typeof array[1]).toBe(typeof arrCopy[1])
    })
    test('Tests whether or not it returns an array', () => {
        expect(Array.isArray(arrCopy)).toBe(true)
    })
})
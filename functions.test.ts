const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4]

let {array,arrCopy} = shuffleArray

describe('shuffleArray should', () => {
    test('Should return an array thats the same length as what is passed in', () => {
        expect(shuffleArray()).toHaveLength(4) //hard coded 4 in this scenario since we are passing in an array of 4 into shuffleArray
    test('Tests whether or not it returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
    test('Make sure items have been shuffled', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
})
})
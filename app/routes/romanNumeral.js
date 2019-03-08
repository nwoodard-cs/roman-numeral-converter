const routes = require('express').Router()

// Converter cannot handle Vinculum
const MAX_VALUE = 3999

// Conversion table for Roman <-> Integer
const conversions = [
  { int: 1000, roman: 'M' },
  { int: 900, roman: 'CM' },
  { int: 500, roman: 'D' },
  { int: 400, roman: 'CD' },
  { int: 100, roman: 'C' },
  { int: 90, roman: 'XC' },
  { int: 50, roman: 'L' },
  { int: 40, roman: 'XL' },
  { int: 10, roman: 'X' },
  { int: 9, roman: 'IX' },
  { int: 5, roman: 'V' },
  { int: 4, roman: 'IV' },
  { int: 1, roman: 'I' }
]

routes.get('/', (req, res) => {
  // Parameters are contained in the req.query object
  const query = req.query.query 
  convertToRoman(query, (err, result) => {
    if (err) res.status(400).send(err)
    else res.send(result);
  })
})

module.exports = routes

// Converts an integer into a roman numeral
// number (integer) => romanNumeral [string], callback(err,res)
const convertToRoman = (number, callback) => {

  checkInput(number, (err) => {
    if (err) callback(err, null)

    let romanNumeral = ''
    for (conversion of conversions) {
      while (number >= conversion.int) {
        romanNumeral += conversion.roman
        number -= conversion.int
      }
    }
    callback(null, romanNumeral)
  })

}

// Validates that input is a positive integer within range.
// number (integer?) => callback(err)
// err will be null if number is valid
const checkInput = (number, callback) => {
  // Test for invalid input
  let intToConvert = parseInt(number)
  if (!Number.isInteger(intToConvert)) callback(`${number} is not an integer!`)
  if (intToConvert < 1) callback('Input must be greater than zero')
  if (intToConvert > MAX_VALUE) callback(`Input must be less than ${MAX_VALUE + 1}`)

  callback(null)  // Number is good
}
const routes = require('express').Router()

// Converter cannot handle Vinculum, so max is V̅ - 1 
const MAX_VALUE = 3999

// Conversion table for Integer (integer) <-> Roman (roman)
const conversions = [
  { integer: 1000, roman: 'M'  },
  { integer: 900,  roman: 'CM' },
  { integer: 500,  roman: 'D'  },
  { integer: 400,  roman: 'CD' },
  { integer: 100,  roman: 'C'  },
  { integer: 90,   roman: 'XC' },
  { integer: 50,   roman: 'L'  },
  { integer: 40,   roman: 'XL' },
  { integer: 10,   roman: 'X'  },
  { integer: 9,    roman: 'IX' },
  { integer: 5,    roman: 'V'  },
  { integer: 4,    roman: 'IV' },
  { integer: 1,    roman: 'I'  }
]

routes.get('/', (req, res) => {
  // Parameters are contained in the req.query object
  const query = req.query.query 
  if (query === undefined) {
    res.status(400).send('Query parameter was not supplied')
  }
  else {
    convertToRoman(query, (err, result) => {
      if (err) res.status(400).send(err)
      else res.send(result) // FIXME: getting 'can't set headers after they're sent...somehow this is being called after a res.status(400).send()
    })
  }
})


// Converts an integer into a roman numeral
// number (integer) => romanNumeral [string], callback(err,res)
const convertToRoman = (number, callback) => {

  checkInput(number, (err) => {
    if (err) callback(err, null)

    let romanNumeral = ''
    for (conversion of conversions) {
      while (number >= conversion.integer) {
        romanNumeral += conversion.roman
        number -= conversion.integer
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
  if (isNaN(intToConvert)) callback(`Invalid argument: ${number} is not an integer`)
  if (intToConvert < 1) callback('Input must be greater than zero')
  if (intToConvert > MAX_VALUE) callback(`Input must be less than ${MAX_VALUE + 1}`)

  callback(null)  // Number is good
}

module.exports = {routes, convertToRoman, checkInput, MAX_VALUE} // FIXME: I don't want to export these when I'm running dev or prod

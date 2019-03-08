const assert = require('assert')
const romanNumeral = require('../app/routes/romanNumeral')

describe('RomanNumeral', () => {

  
  describe('romanNumeral.routes', () => {
    it('Should have a response code of 200 on success')
    // it('Should have a response code of 404 on invalid URI path') TODO: this is in app.js land, not here
    it('Should have a response code of 400 on invalid parameter name')
    it('Should, have a response code of 400 on invalid parameter value')
    it('Should generate a response within 50ms')

  })


  // Converts an integer into a roman numeral
  // number (integer) => romanNumeral [string], callback(err,res)
  describe('convertToRoman', () => {
    // Check boundaries
    it('Should return I for an input of 1', (done) => {
      romanNumeral.convertToRoman(1, (err, result) => {
        assert.equal(result, 'I')
        done()
      })
    })

    it ('Should return MMMCMXCVII for an input of 3999', (done) => {
      romanNumeral.convertToRoman(3999, (err, result) => {
        assert.equal(result, 'MMMCMXCIX')
        done()
      })
    })

  }) // End describe(convertToRoman)


  // Validates that input is a positive integer within range.
  // number (integer?) => callback(err)
  // err will be null if number is valid
  describe('checkInput', () => {
    
    it('Should return an error message on noninteger input', (done) => {
      romanNumeral.checkInput('garbage', err => {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return an error message if request is greater than MAX_VALUE', (done) => {
      romanNumeral.checkInput((romanNumeral.MAX_VALUE + 1), err => {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return an error message if the integer is 0', (done) => {
      romanNumeral.checkInput(0, err => {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return an error message if the integer is negative', (done) => {
      romanNumeral.checkInput(-3400, err => {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return null if the integer is valid', (done) => {
      romanNumeral.checkInput(27, err => {
        assert.equal(err, null)
        done()
      })
    })

    it('Should return the same result for valid integer and equivalent string parameters', (done) => {
      const passCaseInt = 45
      const passCaseStr = '45'

      romanNumeral.checkInput(passCaseInt, intErr => {
        romanNumeral.checkInput(passCaseStr, strErr => {
          assert.equal(intErr, strErr)
          done()
        })
      })
    })

    it('Should return the same result for invalid integer and equivalent string parameters', (done) => {
      const failCaseInt = -10
      const failCaseStr = '-10'

      romanNumeral.checkInput(failCaseInt, intErr => {
        romanNumeral.checkInput(failCaseStr, strErr => {
          assert.equal(intErr, strErr)
          done()
        })
      })
    })

  }) // End describe(checkInput)
}) // End describe(romanNumeral)


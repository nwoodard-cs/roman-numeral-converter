const should = require('chai').should()
const romanNumeral = require('../app/routes/romanNumeral')

describe('romanNumeral', () => {

  describe('convertToRoman', () => {
    // Check boundaries
    it('Should return I for an input of 1', (done) => {
      romanNumeral.convertToRoman(1, (err, result) => {
        should.not.exist(err)
        result.should.equal('I')
        done()
      })
    })

    it ('Should return MMMCMXCVII for an input of 3999', (done) => {
      romanNumeral.convertToRoman(3999, (err, result) => {
        should.not.exist(err)
        result.should.equal('MMMCMXCIX')
        done()
      })
    })

  }) // End describe(convertToRoman)

  describe('checkInput', () => {
    // Ensure errors are being reported
    it('Should return an error message on noninteger input', (done) => {
      romanNumeral.checkInput('garbage', err => {
        should.exist(err)
        done()
      })
    })

    it('Should return an error message if request is greater than MAX_VALUE', (done) => {
      romanNumeral.checkInput((romanNumeral.MAX_VALUE + 1), err => {
        should.exist(err)
        done()
      })
    })

    it('Should return an error message if the integer is 0', (done) => {
      romanNumeral.checkInput(0, err => {
        should.exist(err)
        done()
      })
    })

    it('Should return an error message if the integer is negative', (done) => {
      romanNumeral.checkInput(-3400, err => {
        should.exist(err)
        done()
      })
    })

    it('Should not return error if the integer is valid', (done) => {
      romanNumeral.checkInput(27, err => {
        should.not.exist(err)
        done()
      })
    })

    // Function should exhibit same behavior for int and string
    it('Should return the same result for valid integer and equivalent string parameters', (done) => {
      const passCaseInt = 45
      const passCaseStr = '45'

      romanNumeral.checkInput(passCaseInt, intErr => {
        romanNumeral.checkInput(passCaseStr, strErr => {
          should.equal(intErr, strErr)
          done()
        })
      })
    })

    it('Should return the same result for invalid integer and equivalent string parameters', (done) => {
      const failCaseInt = -10
      const failCaseStr = '-10'

      romanNumeral.checkInput(failCaseInt, intErr => {
        romanNumeral.checkInput(failCaseStr, strErr => {
          intErr.should.equal(strErr)
          done()
        })
      })
    })

  }) // End describe(checkInput)
}) // End describe(romanNumeral)


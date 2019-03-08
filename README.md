# Roman Numeral Converter
Allows an integer to be converted to a roman numeral string through URI request.

## Build and Run

### Prerequisites
- [Node.js Version 8+](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

### Getting Started
Clone the repository
```
git clone https://github.com/nwoodard-cs/roman-numeral-converter
```
Move to the project folder
```
cd roman-numeral-converter
```
Install dependencies through npm
```
npm i
```
Start the server
```
npm start
```
To enable hot reloading run with
```
npm run dev
```

## Testing 
Unit tests are implemented in Mocha and Chai
### Running the Tests
```
npm test
```

### Testing Methodology
The unit tests for this project are focused on converter functionality and error reporting.
- Validate query parameter
    - Check endpoints: `1` and `MAX_VALUE`
    - Check handling of invalid inputs
        - Nonintegers
        - Zero
        - Negative
        - Over max
- Check that error messages are consistently passed to route
Network functionality has not been covered in the tests.
Network requirements include
- Incorrect URI format should produce a message with `status 404`
- All invalid inputs should produce a meaningful message with `status 400`
### Testing Coverage Report
- Statements : 71.88% ( 23/32 )
- Branches   : 58.33% ( 7/12 )
- Lines      : 74.07% ( 20/27 )

## Packaging Layout
- Configuration and JSON files are in the root directory
- The `/app` directory holds all other dependencies for the app.js file
- All express routes are contained in `/app/routes` for extensibility
## Dependency Attribution
- [Express](https://github.com/expressjs/express) - Web framework
- [Morgan](https://github.com/expressjs/morgan) - Request logging middleware
- [Helmet](https://github.com/helmetjs/helmet) - For simple security
### Developer Dependencies
- [Nodemon](https://github.com/remy/nodemon) - Live reloading
- [Mocha](https://github.com/mochajs/mocha) - Testing framework
- [Chai](https://github.com/chaijs/chai) - Assertion library for readability
- [Istanbul](https://github.com/gotwarlost/istanbul) - Test coverage report generator


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

## Testing 
Unit tests are implemented in Mocha
### Running the Tests
```
npm run test
```

### Testing Methodology
- Incorrect URI format should produce a message with `status 404`
- Validating Query
    - Check endpoints: `1` and `MAX_VALUE`
    - Check handling of invalid inputs
        - Nonintegers
        - Zero
        - Negative
    - All invalid inputs should produce a meaningful message with `status 400`
## Packaging Layout
- Configuration and JSON files are in the root directory
- The `/app` directory holds all other dependencies for the app.js file
- All express routes are contained in `/app/routes` for extensibility
## Dependency Attribution
- [Express](https://github.com/expressjs/express) - Web framework
- [Morgan](https://github.com/expressjs/morgan) - Request logging middleware
- [Helmet](https://github.com/helmetjs/helmet) - For simple security
## Developer Dependency Attribution
- [Nodemon](https://github.com/remy/nodemon) - Developer dependency for live reloading
- [Mocha](https://github.com/mochajs/mocha) - Testing framework
- [Chai](https://github.com/chaijs/chai) - Assertion library for testing


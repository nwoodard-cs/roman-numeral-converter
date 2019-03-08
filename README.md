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

### Running the Tests
```
npm run test
```

### Testing Methodology
- Testing Input
    - Check endpoints: 1 and MAX_VALUE
    - Check handling of invalid inputs
        - Nonintegers
        - Zero
        - Negative
    - All invalid inputs should produce a meaningful 400 message
    - Incorrect URI format should produce a 404 message
## Packaging Layout
## Dependency Attribution
- [Express](https://github.com/expressjs/express) - Web framework
- [Morgan](https://github.com/expressjs/morgan) - Request logging middleware
- [Helmet](https://github.com/helmetjs/helmet) - For simple security
- [Nodemon](https://github.com/remy/nodemon) - Developer dependency for live reloading

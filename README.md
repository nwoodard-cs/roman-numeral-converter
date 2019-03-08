# Roman Numeral Converter
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
## Packaging Layout
## Dependency Attribution
- [Express](https://github.com/expressjs/express) - web framework
- [Morgan](https://github.com/expressjs/morgan) - request logging middleware
- [Helmet](https://github.com/helmetjs/helmet) - for simple security
- [Nodemon](https://github.com/remy/nodemon) - developer dependency for live reloading

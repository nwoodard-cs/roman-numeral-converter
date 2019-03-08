console.log('Loading Server...')

//TODO: add unit test

const express = require('express')
// Express Middleware
const logger = require('morgan')
const helmet = require('helmet')

const PORT = 8080

let app = express()
// Use Middleware
app.use(logger('dev'))
app.use(helmet())

// Import the Roman Numeral route
const romanNumeralRoute = require(`${__dirname}/app/routes/romanNumeral.js`)
app.use('/romannumeral', romanNumeralRoute)

// Invalid request
app.get('*', (req, res) => {
  console.log(req.query)
  res.status(404).send('Invalid route.')
})

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on 127.0.0.1:${PORT}`)
})

// Server close functions
const shutdown = () => {
  console.log('\nStarting Shutdown ...')
  server.close(() => {
    console.log('Shutdown complete')
    process.exit(0)
  })
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
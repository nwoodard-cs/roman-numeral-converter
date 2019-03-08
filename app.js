console.log('Loading server...')

const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const PORT = 8080

let app = express()
app.use(logger('dev')) // :method :url :status :response-time ms - :res[content-length]
app.use(helmet())

// Import the Roman Numeral route
const romanNumeralRoute = require(`${__dirname}/app/routes/romanNumeral.js`).routes
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
  console.log('\nStarting shutdown...')
  server.close(() => {
    console.log('Shutdown complete')
    process.exit(0)
  })
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
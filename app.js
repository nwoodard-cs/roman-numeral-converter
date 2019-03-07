console.log('Loading Server...')

// Load core modules
const express = require('express')

// Load expess middleware
// const compression = require('compression')
const logger = require('morgan')
// const bodyParser = require('body-parser')
const helmet = require('helmet')

let app = express()

// Use the middleware
app.use(logger('dev'))
app.use(helmet())

// Import the Roman Numeral route
const romanNumeralRoutes = require(`${__dirname}/app/routes/romanNumeral.js`)
app.use('/romannumeral', romanNumeralRoutes)



// app.use(compression())

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(favicon(`${__dirname}/public/img/favicon.ico`))
// app.use(express.static(`${__dirname}/public`))


// // Fix for local CORS settings in Chrome
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
//   next()
// })


// Invalid request
app.get('*', function(req, res) {
  res.status(404).send('Invalid route.')
})

// Start the server
const server = app.listen(8080, function() { // TODO: make this port a constant at the top
  console.log(`Server listening on 127.0.0.1:8080`)    
})

// Server close functions
function shutdown() {
  console.log('\nStarting Shutdown ...')
  server.close(() => {
    console.log('Shutdown complete')
    process.exit(0)
  })
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
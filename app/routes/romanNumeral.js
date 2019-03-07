const routes = require('express').Router()
  
  // Read 
  routes.get('/:number', (req, res) => {
    res.send(req.params.number);
    // getQuestions(queryObj, (err, results) => {
    //   if (err) console.log(err)
    //   res.send(results)
    // })
  })

module.exports = routes


// HELPER FUNCTIONS
  // Gets all questions that match the query object
//   // queryObj: mongodb selector
//   const getQuestions = (queryObj, callback) => {
//     mongoClient.connect(mongoUrl, (err, client) => {
//       if (err) return console.log(err)
//       const db = client.db(dbName)
  
//       db.collection(colName)
//         .find(queryObj)
//         .toArray((err, results) => callback(err, results))
//     })
//   }
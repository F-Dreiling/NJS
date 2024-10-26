const express = require('express')
const app = express()

const { logger, loggerFull, authorize } = require('./functions');

// Use logger for all routes, for multiple uses declare array app.use([func1, func2])
app.use(logger)

// Use authorize for /api/* only
app.use('/api/*', authorize)

//Routes
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/api/products', (req, res) => {
  res.send('Products for ' + req.user.name)
})

app.get('/api/items', (req, res) => {
  res.send('Items for ' + req.user.name)
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

// Start Server
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
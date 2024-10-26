const express = require('express')
const app = express()

const { logger, loggerFull, authorize } = require('./functions');
const morgan = require('morgan')

// Use Morgan for all routes
app.use(morgan('tiny'))

//Routes
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  res.send('Items')
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

// Start Server
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
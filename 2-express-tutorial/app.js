const express = require('express')
const app = express()

//Routes
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

// Start Server
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
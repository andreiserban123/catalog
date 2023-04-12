const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

//Body parser middleware
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the OnlineCatalogue API...' })
})

const catalogueRouter = require('./routes/catalogue')
app.use('/api/catalogue', catalogueRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

import express from 'express'
import * as path from 'node:path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

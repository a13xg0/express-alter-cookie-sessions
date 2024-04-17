import express from 'express'
import cookieSession from 'cookie-session'
import * as path from 'node:path'
import bodyParser from 'body-parser'
import passport from './passport'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(
  cookieSession({
    secret: 'super secret key',
    name: 'sessions',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    secure: false,
    keys: ['Qjkdffks', 'KJKJSDrefjk3jk'],
  }),
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.render('index')
})

app.post(
  '/login',

  passport.authenticate('local', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.status(200).send('logged in!')
  },
)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

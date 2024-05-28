import { Strategy } from 'passport-local'
import passport from 'passport'
import { users } from './models/users'

passport.use(
  new Strategy({ passReqToCallback: true }, (req, username, password, done) => {
    console.log('username', username)
    const user = users.find((user) => user.email === username)
    if (!user) {
      return done(null, false)
    }

    const valid = password === user.password
    if (!valid) {
      return done(null, false, { message: 'Incorrect username or password.' })
    }
    if (user.shortSession) {
      req.sessionOptions.maxAge = 1000
    }

    return done(null, user)
  }),
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id)
  done(null, user)
})

export default passport

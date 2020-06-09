const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const paymentRouter =require('./routes/payment-routes')
const cookieParser =require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const session = require('express-session')
const User =require('./models/user-model')
const authRouter = require('./routes/auth')
const ensureLogin = require('./middleware/ensure-login')

require('./mongodb-connection')

const app = express()

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({secret:'wallet',resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(User.createStrategy())

app.use(cookieParser())
app.set('view engine', 'pug')


app.use('/payments', paymentRouter)
app.use('/auth', authRouter)

app.get('/', (req, res, next) => {  //middleware removed
    res.render('index', /* { username: req.user.username} */)
})

module.exports = app
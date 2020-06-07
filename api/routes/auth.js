const express =require('express')
const router = express.Router()
const User =require('../models/user-model')
const passport =require('passport')

router.get('/login', (req, res, next) => {
    res.render('login')

})

router.post('/register', (req, res, next) => { 
    User.register({username: req.body.username }, req.body.password, (err, account) => {
        res.send(account)
    })
})
router.post('/local', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}))

module.exports = router

const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
require('./mongodb-connection')
const paymentRouter =require('./routes/payment-routes')
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.set('view engine', 'pug')


app.use('/payments', paymentRouter)

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app
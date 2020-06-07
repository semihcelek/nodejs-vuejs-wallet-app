const express =require('express')
const router = express.Router()
const PaymentService = require('../services/payment-service')
const ensureLogin= require('../middleware/ensure-login')

router.get('/*/json', ensureLogin)

router.get('/all',  async (req, res) => {
    const payments =  await PaymentService.findAll()
    res.render('list', {items:payments})
    
})

router.get('/all/json',  async (req, res) => {
    const payments =  await PaymentService.findAll()
    res.send(payments)
    
})

router.get('/:id',  async (req, res) => {
    const user =  await PaymentService.find(req.params.id)
    res.render('data', {items:user})

})
router.get('/:id/json',  async (req, res) => {
    const user =  await PaymentService.find(req.params.id)
    res.send(user)

})
router.post('/', ensureLogin, async (req, res) => {
    const user = await PaymentService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await PaymentService.del(req.params.id)
    res.send(user)

})

module.exports = router
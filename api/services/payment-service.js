const PaymentModel =require('../models/payment') 
const BaseService = require('./base-service')

class PaymentService extends BaseService {
    model = PaymentModel
}

module.exports =  new PaymentService()
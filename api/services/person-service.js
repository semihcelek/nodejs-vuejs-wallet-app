const PersonModel = require('../models/person')
const BaseService = require('./base-service')

class PersonService extends BaseService {
    model =PersonModel
}

module.exports = new PersonService()
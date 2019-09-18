const { celebrate, Joi } = require('celebrate')

module.exports = celebrate({
  body: Joi.object().keys({
    numbers: Joi.array().required().items(Joi.number()),
  })
})
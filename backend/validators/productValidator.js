const Joi = require('joi');

const productQuerySchema = Joi.object({
  id: Joi.string().optional()
});

function productQueryValidator(req, res, next) {
  const { error } = productQuerySchema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

module.exports = {
  productQueryValidator
};
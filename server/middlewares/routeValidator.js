const joi = require("@hapi/joi");

const bodyValidator = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      console.log(result.error);
      var message;
      if (result.error.details[0].type === "string.email") {
        message =
          "Please input a valid email! Accepted domains are .com, .edu, .net, and .msn";
      } else {
        message = "Name & Password must be from 4 to 24 characters long";
      }
      return res.status(400).json(message);
    } else {
      if (!req.value) req.value = {};
      if (!req.value.body) req.value.body = {};
      req.value.body = result.value;
      next();
    }
  };
};

const paramsValidator = (schema, name) => {
  return (req, res, next) => {
    const result = schema.validate({ params: req.params[name] });
    if (result.error) {
      return res.status(400).json(result.error);
    } else {
      if (!req.value) req.value = {};
      if (!req.value.params) req.value.params = {};
      req.value.params[name] = result.value.params;
      next();
    }
  };
};

const schemas = {
  idSchema: joi.object().keys({
    params: joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  userSchema: joi.object().keys({
    name: joi.string().min(4).max(24).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "edu"] } })
      .required(),
    password: joi.string().min(4).max(24).required(),
  }),
  optionalUserSchema: joi.object().keys({
    name: joi.string().min(4).max(24),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "edu", "msn"] },
    }),
    password: joi.string().min(4).max(24),
  }),
};

module.exports = {
  bodyValidator,
  paramsValidator,
  schemas,
};

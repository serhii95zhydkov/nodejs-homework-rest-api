const {
  User,
  registerSchema,
  loginSchema,
  emailSchema,
  subscriptionUpdateSchema,
} = require("./user");
const { Contact, addSchema, updateStatusSchema } = require("./contact");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  emailSchema,
  subscriptionUpdateSchema,
  Contact,
  addSchema,
  updateStatusSchema,
};

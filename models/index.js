const {
  User,
  registerSchema,
  loginSchema,
  subscriptionUpdateSchema,
} = require("./user");
const { Contact, addSchema, updateStatusSchema } = require("./contact");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  subscriptionUpdateSchema,
  Contact,
  addSchema,
  updateStatusSchema,
};

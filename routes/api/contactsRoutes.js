const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { isValidId, authenticate } = require("../../middlewares");

const { validateBody } = require("../../utils");

const { addSchema, updateStatusSchema } = require("../../models");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(addSchema),
  ctrl.addContact
);

contactsRouter.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContactById
);

contactsRouter.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusSchema),
  ctrl.updateStatusContact
);

contactsRouter.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.deleteContactById
);

module.exports = contactsRouter;

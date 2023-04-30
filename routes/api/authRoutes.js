const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { validateBody } = require("../../utils");

const { authenticate, upload } = require("../../middlewares");

const {
  registerSchema,
  loginSchema,
  emailSchema,
  subscriptionUpdateSchema,
} = require("../../models");

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), ctrl.register);

authRouter.get("/verify/:verificationToken", ctrl.verify);

authRouter.post("/verify", validateBody(emailSchema), ctrl.resendVerifyEmail);

authRouter.post("/login", validateBody(loginSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionUpdateSchema),
  ctrl.updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = authRouter;

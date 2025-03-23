import { Hono } from "hono";
import { userAuthenticationMiddlewares } from "../../middlewares/user-authentication-handler.js";
import createCheckoutController from "./index.js";

const router = new Hono()
.use("/auth/checkout", userAuthenticationMiddlewares)
.post("/auth/checkout/:user_id", createCheckoutController)

export default router;
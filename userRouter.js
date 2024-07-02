import express from "express";
import {login, userRegister} from "../controller/userController.js"

const router = express.Router();

router.post("/user/register", userRegister);
router.post("/user/login", login);

export default router;
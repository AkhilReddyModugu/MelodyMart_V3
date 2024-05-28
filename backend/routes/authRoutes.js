import express from "express";
import loginController from "../controllers/loginController.js";
import signupController from "../controllers/signupController.js";

const router= express.Router();

router.get('/', (req, res) => {
    res.status(200).json({msg:"At the route /api/users"});
});
router.post('/login',loginController);
router.post('/signup',signupController);

export default router;
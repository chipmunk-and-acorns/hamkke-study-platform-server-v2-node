import express, { Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

import { AppDataSource } from "../db";
import {User} from "../model/User";

const router = express.Router();

router.get("/auth", (req: Request, res: Response) => {
    res.send("Hello User Auth");
});

router.post("/login", async (req: Request, res: Response) => {
    try {
        // email 체크
        const userRepository = AppDataSource.getRepository(User);
        const findUser = await userRepository.findOneBy({email: req.body.email});

        if(!findUser) {
            return res.status(400).send("존재하지 않는 email 입니다.");
        }

        if(findUser.password !== req.body.password) {
            return res.status(400).send("비밀번호가 일치하지 않습니다.");
        }

        res.status(200).json({
            id: findUser.id,
            email: findUser.email,
            nickname: findUser.nickname
        });
    } catch (e) {
        console.error(e);
        res.status(500).send("server error");
    }
});

router.post("/register",
    body("email").isEmail().withMessage("Invalid email"),
    body("password").trim().notEmpty().withMessage("empty password")
        .isLength({ min: 5 }).withMessage("password length is minimum: length >= 5"),
    body("nickname").trim().trim().notEmpty().withMessage("empty nickname")
        .isLength({ min: 3 }).withMessage("nickname length is minimum: length >= 3"),
    async (req: Request, res: Response) => {
    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.nickname = req.body.nickname;

    try {
        // 중복 체크
        const userRepository = AppDataSource.getRepository(User);
        const findUser = await userRepository.findOneBy({ email: user.email });

        if(findUser) return res.status(400).send("이미 존재하는 이메일 입니다.");

        const createUser = await userRepository.save(user);

        res.status(200).json({
            id: createUser.id,
            email: createUser.email,
            nickname: createUser.nickname
        });
    } catch (e) {
        console.error(e);
        res.status(500).send("server error");
    }
});

router.get("/", async (req:Request, res:Response) => {
    const allUsers = await AppDataSource.getRepository(User).find();
    return res.json(allUsers);
})

export default router;
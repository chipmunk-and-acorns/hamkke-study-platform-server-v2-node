import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {AppDataSource} from "../db";
import {User} from "../model/User";
import {CustomRequest} from "../customType/cutom";

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.x_auth;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        AppDataSource.getRepository(User).findOneBy({"id": Number(decoded)}).then((user) => {
            if (!user) return res.json({isAuth: false, error: "유요하지 않은 토큰 정보"});

            (req as CustomRequest).user = user;
            next();
        });
    } catch (e) {
        return res.json({ isAuth: false, error: "토큰이 없습니다."});
    }

};

export default auth;
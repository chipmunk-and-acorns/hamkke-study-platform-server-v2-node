import jwt from "jsonwebtoken";

export const generateToken = (id: number) => {
    return jwt.sign(id.toString(), process.env.JWT_SECRET_KEY as string);
}
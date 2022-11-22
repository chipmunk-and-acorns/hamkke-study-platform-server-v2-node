import { Request } from "express";
import {User} from "../model/User";

interface CustomRequest extends Request {
    user: User;
}

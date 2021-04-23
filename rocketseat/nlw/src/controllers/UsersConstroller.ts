import { Request, Response } from "express";
import UsersService from "../services/UsersService";

export default class UsersController {
    async create(req: Request, res: Response) {
        const { email } = req.body;

        const service = new UsersService();

        const user = await service.insert({ email });

        return res.json(user);
    }
}
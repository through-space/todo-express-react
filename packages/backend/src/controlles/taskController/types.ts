import { Request, Response } from "express";

export interface IRegisterUser {
	username: string;
	password: string;
}

export interface IAuthController {
	getAll: (req: Request<{}, {}, IRegisterUser>, res: Response) => void;
	// login: (req: Request, res: Response) => void;
	// verifyToken: (req: Request, res: Response) => void;
}

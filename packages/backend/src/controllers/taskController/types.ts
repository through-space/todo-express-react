import type { Request, Response } from "express";

export interface ITaskController {
	getAllTasks: (req: Request, res: Response) => void;
}

import type { NextFunction, Request, Response } from "express";

export interface ITaskController {
	getAllTasks: (req: Request, res: Response, next: NextFunction) => void;
	getTaskByID: (req: Request, res: Response, next: NextFunction) => void;
	createTask: (req: Request, res: Response, next: NextFunction) => void;
	updateTask: (req: Request, res: Response, next: NextFunction) => void;
	updateTaskStatus: (req: Request, res: Response, next: NextFunction) => void;
	deleteTask: (req: Request, res: Response, next: NextFunction) => void;
	getStats: (req: Request, res: Response, next: NextFunction) => void;
}

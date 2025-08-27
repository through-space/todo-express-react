import type { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500).json({ error: err.message });
};

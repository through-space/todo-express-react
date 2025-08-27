import type { NextFunction, Request, Response } from "express";
import { taskRepository } from "@repositories/task/taskRepository";
import { Prisma } from "@prisma/client";
import { ETaskRepositoryError } from "@repositories/task/types";
import * as console from "node:console";

const validateTask = (task: Prisma.TaskCreateInput): Prisma.TaskCreateInput => {
	if (!task.title) {
		throw new Error("Task title is required");
	}

	return task;
};

export const getAllTasks = (req: Request, res: Response, next: NextFunction): void => {
	taskRepository
		.getTasks()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((err) => {
			res.status(500).json({ message: "Server error", error: err });
			next();
		});
};

export const getTaskByID = (req: Request, res: Response, next: NextFunction): void => {
	const { id } = req.params;

	if (!id) {
		res.status(400).json({ message: "Invalid id" });
		next();
		return;
	}

	taskRepository
		.getTaskByID(id)
		.then((task) => {
			if (!task) {
				res.status(404).json({ error: "Task not found" });
				return;
			}

			res.status(200).json(task);
		})
		.catch((err) => {
			res.status(500).json({ error: "Server error" });
			next();
		})
		.finally(next);
};

export const createTask = (req: Request, res: Response, next: NextFunction): void => {
	const task: Prisma.TaskCreateInput = req.body;

	try {
		validateTask(task);
	} catch (err) {
		if (err instanceof Error) {
			res.status(400).json({ error: err?.message });
			next();
		}
	}

	task.updated_at = new Date();

	taskRepository
		.createTask(task)
		.then((task) => {
			res.status(201).location(`/api/tasks/${task.id}`).json(task);
		})
		.catch((err) => {
			res.status(500).json({ error: "Server error" });
		})
		.finally(next);
};

export const updateTask = (req: Request, res: Response, next: NextFunction): void => {
	const { id } = req.params;
	const task: Prisma.TaskUpdateInput = req.body;

	if (!id) {
		res.status(400).json({ error: "Invalid Task ID" });
		return;
	}

	taskRepository
		.updateTask(id, task)
		.then((task) => {
			res.status(200).json(task);
		})
		.catch((err) => {
			switch (err?.cause) {
				case ETaskRepositoryError.TASK_NOT_FOUND:
					res.status(404).json({ error: "Task not found" });
					break;
				case ETaskRepositoryError.TASK_VALIDATION_ERROR:
					res.status(400).json({ error: "Validation error" });
					break;
				default:
					res.status(500).json({ error: "Server error" });
			}
		})
		.finally(() => {
			next();
		});
};

export const updateTaskStatus = (req: Request, res: Response, next: NextFunction): void => {
	const { id } = req.params;
	const { status } = req.body;

	if (!id) {
		res.status(400).json({ message: "Invalid Task ID" });
		return;
	}

	if (!status) {
		res.status(400).json({ message: "Missing Task status" });
		return;
	}

	taskRepository
		.updateTaskStatus(id, status)
		.then((task) => {
			res.status(200).json(task);
		})
		.catch((err) => {
			switch (err?.cause) {
				case ETaskRepositoryError.TASK_NOT_FOUND:
					res.status(404).json({ error: "Task not found" });
					break;
				case ETaskRepositoryError.TASK_VALIDATION_ERROR:
					res.status(400).json({ error: err?.message });
					break;
				default:
					res.status(500).json({ error: "Server error" });
			}
		})
		.finally(() => {
			next();
		});
};

export const deleteTask = (req: Request, res: Response, next: NextFunction): void => {
	const { id } = req.params;

	if (!id) {
		res.status(400).json({ message: "Invalid Task ID" });
		return;
	}

	taskRepository
		.deleteTask(id)
		.then((task) => {
			res.status(204).json(task);
		})
		.catch((err) => {
			switch (err?.cause) {
				case ETaskRepositoryError.TASK_NOT_FOUND:
					res.status(404).json({ error: "Task not found" });
					break;
				case ETaskRepositoryError.TASK_VALIDATION_ERROR:
					res.status(400).json({ error: err?.message });
					break;
				default:
					res.status(500).json({ error: "Server error" });
			}
		})
		.finally(() => {
			next();
		});
};

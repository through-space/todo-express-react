import { Prisma, type Task, ETaskStatus } from "@prisma/client";
import { prisma } from "../../index";
import { EPrismaError, ETaskRepositoryError, TaskRepositoryError } from "@repositories/task/types";

const getSanitizedTask = <T extends Record<string, any>>(task: T): T => {
	const allowedFields = new Set<keyof T>(Object.values(Prisma.TaskScalarFieldEnum));

	return Object.fromEntries(
		Object.entries(task).filter(([key]) => allowedFields.has(key as keyof T)),
	) as T;
};

export const getTasks = async (): Promise<Task[]> => {
	return prisma.task
		.findMany({
			orderBy: { updated_at: "desc" },
		})
		.then((tasks) => tasks)
		.catch((err) => {
			throw err;
		});
};

export const getTaskByID = async (id: Task["id"]): Promise<Task | null> => {
	return prisma.task
		.findUnique({ where: { id } })
		.then((task) => task)
		.catch((err) => {
			throw err;
		});
};

export const createTask = async (task: Prisma.TaskCreateInput): Promise<Task> => {
	const sanitizedTask = getSanitizedTask<Prisma.TaskCreateInput>(task);
	return prisma.task
		.create({ data: sanitizedTask })
		.then((task) => task)
		.catch((err) => {
			throw err;
		});
};

export const updateTask = async (id: Task["id"], task: Prisma.TaskUpdateInput): Promise<Task> => {
	if (!id) {
		throw new Error("Task id is required", {
			cause: ETaskRepositoryError.TASK_VALIDATION_ERROR,
		});
	}

	task.updated_at = new Date();
	const sanitizedTask = getSanitizedTask<Prisma.TaskUpdateInput>(task);

	return prisma.task
		.update({ data: sanitizedTask, where: { id } })
		.then((task) => task)
		.catch((err) => {
			if (err instanceof Prisma.PrismaClientKnownRequestError) {
				switch (err.code) {
					case EPrismaError.RECORD_NOT_FOUND:
						throw new TaskRepositoryError(
							"Task not found",
							ETaskRepositoryError.TASK_NOT_FOUND,
						);
					default:
						throw err;
				}
			} else {
				throw err;
			}
		});
};

export const updateTaskStatus = async (id: Task["id"], status: Task["status"]): Promise<Task> => {
	if (!id) {
		throw new TaskRepositoryError(
			"Task id is required",
			ETaskRepositoryError.TASK_VALIDATION_ERROR,
		);
	}

	const allowedStatuses = new Set<ETaskStatus>(Object.values(ETaskStatus));

	if (!allowedStatuses.has(status)) {
		throw new TaskRepositoryError(
			"Task Status not allowed",
			ETaskRepositoryError.TASK_VALIDATION_ERROR,
		);
	}

	return prisma.task
		.update({ where: { id }, data: { status } })
		.then((task) => task)
		.catch((err) => {
			if (err instanceof Prisma.PrismaClientKnownRequestError) {
				if (err.code === EPrismaError.RECORD_NOT_FOUND) {
					throw new TaskRepositoryError(
						"Task not found",
						ETaskRepositoryError.TASK_NOT_FOUND,
					);
				}
			}

			throw err;
		});
};

export const deleteTask = async (id: Task["id"]): Promise<Task> => {
	if (!id) {
		throw new TaskRepositoryError(
			"Task id is required",
			ETaskRepositoryError.TASK_VALIDATION_ERROR,
		);
	}

	return prisma.task
		.delete({ where: { id } })
		.then((task) => task)
		.catch((err) => {
			if (err instanceof Prisma.PrismaClientKnownRequestError) {
				if (err.code === EPrismaError.RECORD_NOT_FOUND) {
					throw new TaskRepositoryError(
						"Task not found",
						ETaskRepositoryError.TASK_NOT_FOUND,
					);
				}
			}

			throw err;
		});
};

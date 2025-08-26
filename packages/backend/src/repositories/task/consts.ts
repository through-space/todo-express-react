import type { Task } from "@prisma/client";
import { prisma } from "../../index";

// getTasks: () => Task[];
// getTaskByID: (id: Task["id"]) => Task | null;
// createTask: (task: Task) => Task;
// updateTask: (id: Task["id"], task: Task) => Task;
// updateTaskStatus: (id: Task["id"], status: Task["status"]) => Task;
// deleteTask: (id: Task["id"]) => void;
export const getTasks = (): Promise<Task[]> => {
	return prisma.task.findMany();
};

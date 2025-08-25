import { getAllTasks } from "./consts.js";
import { IAuthController } from "./types.js";

export const taskController: IAuthController = {
	getAll: getAllTasks,
};

import { create } from "zustand/react";
import { ITaskStore } from "@stores/task-store/types";
import { ITask } from "@services/task-service/types";

export const useTaskStore = create<ITaskStore>()((set) => {
	return {
		tasks: [],
		setTasks: (tasks: ITask[]) => set({ tasks }),
	};
});

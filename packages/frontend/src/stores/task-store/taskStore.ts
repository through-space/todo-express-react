import { create } from "zustand/react";
import { ITaskStore } from "@stores/task-store/types";
import { ITask } from "@services/task-service/types";

export const useTaskStore = create<ITaskStore>()((set) => {
	return {
		tasks: [],
		setTasks: (tasks: ITask[]) => set({ tasks }),
		addTask: (task: ITask) =>
			set((state) => {
				return {
					tasks: [task, ...state.tasks],
				};
			}),
		updateTask: (id: ITask["id"], task: Partial<ITask>) => {
			set((state) => {
				return {
					tasks: state.tasks.map((existingTask) =>
						existingTask.id === id
							? { ...existingTask, ...task }
							: existingTask,
					),
				};
			});
		},
		editedTask: null,
		setEditedTask: (task: ITask | null) => set({ editedTask: task }),
	};
});

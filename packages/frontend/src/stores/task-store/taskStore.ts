import { create } from "zustand/react";
import { ESortingNames, ITaskStore } from "@stores/task-store/types";
import { ITask } from "@services/task-service/types";

export const useTaskStore = create<ITaskStore>()((set, get) => {
	return {
		tasks: [],
		settings: { sortingName: ESortingNames.UPDATED_AT_DESC },
		setSettings: (settings: ITaskStore["settings"]) => set({ settings }),
		getTaskById: (id: ITask["id"]): ITask | null => {
			return get().tasks.find((task) => task.id === id) ?? null;
		},
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
		deleteTask: (id: ITask["id"]) => {
			set((state) => {
				return {
					tasks: state.tasks.filter((task) => task.id !== id),
				};
			});
		},
		editedTask: null,
		setEditedTask: (task: ITask) =>
			set((state) => {
				if (!task) {
					return { editedTask: null };
				}
				return {
					editedTask: { ...task },
				};
			}),
	};
});

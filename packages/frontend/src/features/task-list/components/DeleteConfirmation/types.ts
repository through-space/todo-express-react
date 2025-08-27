import { ITask } from "@services/task-service/types";

export interface IDeleteConfirmationProps {
	isOpen: boolean;
	deleteID: ITask["id"] | null;
	onDelete: (id: ITask["id"]) => void;
	onCancel: () => void;
}

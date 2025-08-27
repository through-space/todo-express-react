import { TextInput } from "@ui-components/atoms/text-input/TextInput";
import {
	FormFieldsWrapper,
	FormFieldWrapper,
	FormWrapper,
} from "@features/task-form/components/TaskForm/styled";
import { useTaskStore } from "@stores/task-store/taskStore";
import { ITaskFormProps } from "@features/task-form/components/TaskForm/types";
import { FC } from "react";
import { SelectInput } from "@ui-components/atoms/select-input/SelectInput";
import { statusOptions } from "@features/task-form/components/TaskForm/consts";
import { ETaskStatus } from "@services/task-service/types";

export const TaskForm: FC<ITaskFormProps> = ({ saveTask }) => {
	const { editedTask, setEditedTask } = useTaskStore();

	const handleSubmit = (e) => {
		if (!editedTask || !editedTask.title) {
			return;
		}
		saveTask(editedTask);
	};

	const handleTitleChange = (title: string) => {
		setEditedTask({ ...editedTask, title });
	};

	const handleStatusChange = (status: ETaskStatus) => {
		setEditedTask({ ...editedTask, status });
	};

	const handleDescriptionChange = (description: string) => {
		setEditedTask({ ...editedTask, description });
	};

	return (
		<FormWrapper>
			<form className={"w-full"}>
				<FormFieldsWrapper>
					<FormFieldWrapper>
						<TextInput
							id="title"
							placeholder="Task title"
							value={editedTask?.title || ""}
							onChange={handleTitleChange}
						/>
					</FormFieldWrapper>
					<FormFieldWrapper>
						<TextInput
							id="description"
							placeholder="Task description"
							value={editedTask?.description || ""}
							onChange={handleDescriptionChange}
						/>
					</FormFieldWrapper>
					<FormFieldWrapper>
						<SelectInput
							id="status"
							value={editedTask?.status}
							options={statusOptions}
							onChange={handleStatusChange}
						/>
					</FormFieldWrapper>
					<button type={"button"} onClick={handleSubmit}>
						Save
					</button>
				</FormFieldsWrapper>
			</form>
		</FormWrapper>
	);
};

import { FC } from "react";
import { TaskListSettingsWrapper } from "@features/task-list/components/TaskListSettings/styled";
import { useTaskStore } from "@stores/task-store/taskStore";
import { SelectInput } from "@ui-components/atoms/select-input/SelectInput";
import {
	getOrderByName,
	sortingOptions,
	statusOptions,
} from "@features/task-list/components/TaskListSettings/consts";
import { ETaskStatus } from "@services/task-service/types";
import { ESortingNames } from "@stores/task-store/types";

export const TaskListSettings: FC = () => {
	const { settings, setSettings } = useTaskStore();

	const onStatusChange = (status: ETaskStatus): void => {
		setSettings({ statusFilter: status });
	};

	const onOrderChange = (orderName: ESortingNames): void => {
		const order = getOrderByName(orderName);
		setSettings({ ...order, sortingName: orderName });
	};

	return (
		<TaskListSettingsWrapper>
			<SelectInput
				id={"listStatus"}
				value={settings.statusFilter}
				options={statusOptions}
				onChange={onStatusChange}
			/>
			<SelectInput
				id={"listOrder"}
				value={settings.sortingName}
				options={sortingOptions}
				onChange={onOrderChange}
			/>
		</TaskListSettingsWrapper>
	);
};

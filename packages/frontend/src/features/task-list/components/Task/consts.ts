import { ETaskStatus } from "@services/task-service/types";
import { ISelectOption } from "@ui-components/atoms/select-input/types";

const DEFAULT_STATUS_NAME = "Open";
const DEFAULT_STATUS_COLOR = "bg-green-900";

const statusNames: Record<ETaskStatus, string> = {
	[ETaskStatus.OPEN]: "Open",
	[ETaskStatus.DONE]: "Done",
	[ETaskStatus.IN_PROGRESS]: "In Progress",
};

const statusColors: Record<ETaskStatus, string> = {
	[ETaskStatus.OPEN]: "bg-red-900",
	[ETaskStatus.DONE]: "bg-green-900",
	[ETaskStatus.IN_PROGRESS]: "bg-yellow-700",
};

export const getStatusName = (status: ETaskStatus) => {
	if (status in statusNames) {
		return statusNames[status];
	}

	return DEFAULT_STATUS_NAME;
};

export const getStatusColor = (status: ETaskStatus) => {
	if (status in statusColors) {
		return statusColors[status];
	}

	return DEFAULT_STATUS_COLOR;
};

export const statusSelectionOptions: ISelectOption[] = [
	{ name: "Open", value: ETaskStatus.OPEN },
	{ name: "Done", value: ETaskStatus.DONE },
	{ name: "In Progress", value: ETaskStatus.IN_PROGRESS },
];

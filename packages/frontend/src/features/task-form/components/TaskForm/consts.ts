import { ISelectOption } from "@ui-components/atoms/select-input/types";
import { ETaskStatus } from "@services/task-service/types";

export const statusOptions: ISelectOption[] = [
	{ name: "Open", value: ETaskStatus.OPEN },
	{ name: "Done", value: ETaskStatus.DONE },
	{ name: "In Progress", value: ETaskStatus.IN_PROGRESS },
];

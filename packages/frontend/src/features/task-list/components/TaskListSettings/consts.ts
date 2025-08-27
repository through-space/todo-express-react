import { ISelectOption } from "@ui-components/atoms/select-input/types";
import { ETaskStatus } from "@services/task-service/types";
import { ESortingNames, ITaskListSettings } from "@stores/task-store/types";

export const statusOptions: ISelectOption[] = [
	{ name: "All", value: "all" },
	{ name: "Open", value: ETaskStatus.OPEN },
	{ name: "Done", value: ETaskStatus.DONE },
	{ name: "In Progress", value: ETaskStatus.IN_PROGRESS },
];

export const sortingOptions: ISelectOption[] = [
	{ name: "id ASC", value: ESortingNames.ID_ASC },
	{ name: "id DESC", value: ESortingNames.ID_DESC },
	{ name: "title ASC", value: ESortingNames.TITLE_ASC },
	{ name: "title DESC", value: ESortingNames.TITLE_DESC },
	{ name: "updated_at ASC", value: ESortingNames.UPDATED_AT_ASC },
	{ name: "updated_at DESC", value: ESortingNames.UPDATED_AT_DESC },
	{ name: "created_at ASC", value: ESortingNames.CREATED_AT_ASC },
	{ name: "created_at DESC", value: ESortingNames.CREATED_AT_DESC },
];

export const orderByName: Record<ESortingNames, ITaskListSettings> = {
	[ESortingNames.ID_ASC]: { orderBy: "id", orderDirection: "asc" },
	[ESortingNames.ID_DESC]: { orderBy: "id", orderDirection: "desc" },
	[ESortingNames.TITLE_ASC]: { orderBy: "title", orderDirection: "asc" },
	[ESortingNames.TITLE_DESC]: { orderBy: "title", orderDirection: "desc" },
	[ESortingNames.UPDATED_AT_ASC]: {
		orderBy: "updated_at",
		orderDirection: "asc",
	},
	[ESortingNames.UPDATED_AT_DESC]: {
		orderBy: "updated_at",
		orderDirection: "desc",
	},
	[ESortingNames.CREATED_AT_ASC]: {
		orderBy: "created_at",
		orderDirection: "asc",
	},
	[ESortingNames.CREATED_AT_DESC]: {
		orderBy: "created_at",
		orderDirection: "desc",
	},
};

export const getOrderByName = (name: ESortingNames): ITaskListSettings => {
	if (name in orderByName) {
		return orderByName[name];
	}

	return {};
};

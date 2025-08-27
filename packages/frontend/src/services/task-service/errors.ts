export const handleError = (err: any) => {
	console.log("err.message", err);
	console.log("err.code", err.code);
};

// export enum ETaskServiceError {
// 	TASK_NOT_FOUND,
// 	TASK_VALIDATION_ERROR,
// 	TASK_CREATION_ERROR,
// 	TASK_UPDATE_ERROR,
// 	TASK_DELETE_ERROR,
// }

export class TaskServiceError extends Error {
	code: number;
	constructor(message: string, code: number) {
		super(message);
		this.name = "TaskValidationError";
		this.code = code;
	}
}

import { FC, useEffect, useState } from "react";
import { Dialog } from "@ui-components/atoms/dialog/Dialog";
import { IDeleteConfirmationProps } from "@features/task-list/components/DeleteConfirmation/types";

export const DeleteConfirmation: FC<IDeleteConfirmationProps> = ({
	onDelete,
	onCancel,
	isOpen,
	deleteID,
}) => {
	const handleDelete = () => {
		onDelete(deleteID);
	};

	return (
		<Dialog isOpen={isOpen} onClose={onCancel}>
			<button onClick={onCancel}>Cancel</button>
			<button onClick={handleDelete}>Delete</button>
		</Dialog>
	);
};

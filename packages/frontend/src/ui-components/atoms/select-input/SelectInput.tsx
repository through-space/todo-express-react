import { FC } from "react";
import { ISelectInputProps } from "@ui-components/atoms/select-input/types";

export const SelectInput: FC<ISelectInputProps> = ({
	id,
	value,
	onChange,
	options,
}) => {
	const optionItems = options.map((option) => (
		<option key={option.value} value={option.value}>
			{option.name}
		</option>
	));
	return (
		<select
			id={id}
			value={value}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		>
			{optionItems}
		</select>
	);
};

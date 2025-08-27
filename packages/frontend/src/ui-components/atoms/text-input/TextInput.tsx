import { FC } from "react";
import { ITextInputProps } from "@ui-components/atoms/text-input/types";

export const TextInput: FC<ITextInputProps> = (props) => {
	const { value, onChange, id, placeholder } = props;

	const handleChange = (e) => onChange && onChange(e.target.value);

	return (
		<input
			id={id}
			key={id}
			type="text"
			value={value}
			placeholder={placeholder}
			onChange={handleChange}
			className={"w-full"}
		/>
	);
};

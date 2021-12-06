import * as React from 'react';

interface Props {
	readonly type: string;
	readonly name: string;
	readonly label: string;
	readonly placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Field = ({
	type,
	name,
	label,
	placeholder,
	onChange,
}: Props) => (
	<div className={`c-form__field c-form__field--${type}`}>
		<header className="c-form__field-head">
			<label htmlFor={name}>{label}</label>

		</header>

		{type === 'file' ? (
			<input id={name} type='file' name={name} placeholder={placeholder} onChange={onChange} />
		) : (
			<input id={name} type={type} name={name} placeholder={placeholder} onChange={onChange} />
		)}
	</div>
);

export default Field;

export const Input = ({name, onChange, value, attributes}) => {
	return ( <>
		<input className="input"
				 onChange={onChange}
				 value={value}
				 name={name}
				 {...attributes}
				 type={attributes?.type ?? "text"}/>
	</> )
}

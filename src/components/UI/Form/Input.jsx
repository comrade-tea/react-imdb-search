export const Input = ({onChange, value, attributes}) => {
	return (
		<>
			<input className="input"
					 onChange={ onChange }
					 value={ value }
					 { ...attributes }
					 type="text"/>
		</>
	)
}

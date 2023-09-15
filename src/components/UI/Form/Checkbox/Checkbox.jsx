import $ from "./Checkbox.module.sass"

const Checkbox = ({label, checked, onChange}) => {

	return (
		<label className={ $.checkbox }>
			<input className={ $.checkbox__input } type="checkbox" checked={ checked } onChange={ onChange }/>
			<span className={ $.checkbox__label }>{ label }</span>
		</label>
	)
}

export default Checkbox

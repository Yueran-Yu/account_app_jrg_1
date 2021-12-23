import React from 'react';


export const LabelForm: React.FC<InputType> = ({label, classN, children, ...rest}) => {
	return (
		<label>
			<span className='label-name'>{label}</span>
			<input className={classN} {...rest} />
		</label>
	)
}

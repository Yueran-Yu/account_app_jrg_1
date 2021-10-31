import React from 'react';
import {Wrapper} from "./DateSection.style";
import DatePicker from 'react-datepicker';

export const DateSection: React.FC = () => {
	const onChange = (e: Date) => {
		console.log(e)
	}
	return (
		<Wrapper>
			<DatePicker
				className='date'
				selected={new Date()}
				name='date'
				onChange={onChange}
			/>
		</Wrapper>
	)
}

import React from 'react';
import {Wrapper} from "./DateSection.style";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const DateSection: React.FC<DateProps> = ({value,onChangeDate}) => {
	return (
		<Wrapper>
			<DatePicker
				className='date'
				selected={value}
				name='date'
				dateFormat='yyyy/MM/dd'
				onChange={(e: Date)=> onChangeDate(e)}
			/>
		</Wrapper>
	)
}

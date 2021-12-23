import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const DateSection: React.FC<DateProps> = ({value,classN,onChangeDate}) => {
	return (
			<DatePicker
				className={`date ${classN}`}
				selected={value}
				name='date'
				dateFormat='yyyy/MM/dd'
				onChange={(e: Date)=> onChangeDate(e)}
			/>
	)
}

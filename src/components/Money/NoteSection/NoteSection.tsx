import React, {ChangeEvent} from 'react';
import {Wrapper} from "./NoteSection.style";
import {RiStickyNoteLine} from "react-icons/ri";


export const NoteSection: React.FC<NoteProps> = ({value, onChangeNote}) => {


	return (
		<Wrapper>
			<label>
				<RiStickyNoteLine className='note'/>
				<input type="text"
							 placeholder='Add note here'
							 value={value}
							 onChange={(e: ChangeEvent<HTMLInputElement>)=>onChangeNote(e.target.value)}
				/>
			</label>
		</Wrapper>
	)
}

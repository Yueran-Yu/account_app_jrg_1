import React, {useRef, useState} from 'react';
import {Wrapper} from "./NoteSection.style";



export const NoteSection: React.FC = () => {
	const [note, setNote] = useState('')
	const refInput = useRef<HTMLInputElement>(null)

	const InputValue = () => {
		if (refInput.current) {
			console.log(refInput.current.value)
			setNote(refInput.current.value)
		}
	}

	return (
		<Wrapper>
			<label>
				<span>Note</span>
				<input type="text"
							 placeholder='Add note here'
							 ref={refInput}
							 defaultValue={note}
							 onBlur={InputValue}
				/>
			</label>
		</Wrapper>
	)
}

import React, {useRef} from 'react';
import {Wrapper} from "./NoteSection.style";

export const NoteSection: React.FC<NoteProps> = ({value, onChangeNote}) => {
	const refInput = useRef<HTMLInputElement>(null)

	const InputValue = () => {
		if (refInput.current) {
			onChangeNote(refInput.current.value)
		}
	}

	return (
		<Wrapper>
			<label>
				<span>Note</span>
				<input type="text"
							 placeholder='Add note here'
							 ref={refInput}
							 defaultValue={value}
							 onBlur={InputValue}
				/>
			</label>
		</Wrapper>
	)
}

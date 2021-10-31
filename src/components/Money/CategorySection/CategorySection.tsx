import React from 'react';
import {Wrapper} from "./CategorySection.style";

export const CategorySection: React.FC = () => {
	return (
		<Wrapper>
			<div className='roundCorner'>
				<div className='selected'>Expense</div>
				<div>Income</div>
			</div>
		</Wrapper>
	)
}


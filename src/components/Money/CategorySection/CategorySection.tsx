import React, {useState} from 'react';
import {Wrapper} from "./CategorySection.style";

const CategoryListMap = {
	'-': 'Expense',
	'+': 'Income'
}

type Keys = keyof typeof CategoryListMap

export const CategorySection: React.FC<CategoryProps> = ({value, onChangeCategory}) => {
	const [categoryList] = useState<Keys[]>(['-', '+'])

	const changeCategory = (category: string) => {
		onChangeCategory(category === '-' ? '-' : '+')
	}

	return (
		<Wrapper>
			<div className='roundCorner'>
				{
					categoryList.map(category => (
						<div key={category} className={value === category ? 'selected' : ''}
								 onClick={() => changeCategory(category)}>{CategoryListMap[category]}
						</div>
					))
				}
			</div>
		</Wrapper>
	)
}




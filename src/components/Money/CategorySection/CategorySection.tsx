import React, {useState} from 'react';
import {Wrapper} from "./CategorySection.style";

const CategoryListMap = {
	'-': 'Expense',
	'+': 'Income'
}

type Keys = keyof typeof CategoryListMap

export const CategorySection: React.FC = () => {
	// const [categoryList] = useState<({ '-': 'Expense' } | { '+': 'Income' })[]>([{'-': 'Expense'}, {'+': 'Income'}])
	const [categoryList] = useState<Keys[]>(['-', '+'])
	const [selectedCategory, setSelectedCategory] = useState('-')
	const changeCategory = (category: string) => {
		if (category === '-') {
			setSelectedCategory('-')
		} else if (category === '+') {
			setSelectedCategory('+')
		}
	}

	return (
		<Wrapper>
			<div className='roundCorner'>
				{
					categoryList.map(c => (
						<>
							<div className={selectedCategory === c ? 'selected' : ''}
									 onClick={() => changeCategory(c)}>{CategoryListMap[c]}
							</div>
						</>
					))
				}

			</div>
		</Wrapper>
	)
}




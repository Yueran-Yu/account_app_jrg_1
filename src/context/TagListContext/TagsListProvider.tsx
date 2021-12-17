import React, {createContext, ReactNode, useContext, useState} from "react";
import {IconsListGenerator, ExpenseIcons, IncomeIcons} from "../../utils/IconsCollections";

const ExpenseIconsList = IconsListGenerator(ExpenseIcons)
const IncomeIconsList = IconsListGenerator(IncomeIcons)
const expenseInitialValue = ExpenseIconsList.slice(0, 7)
const incomeInitialValue = IncomeIconsList.slice(0, 3)

const TagsListContext = createContext<TagListContextType | null>(null)

export const useTagsListContext = () => {
	return useContext(TagsListContext) as TagListContextType
}

const TagsListProvider: React.FC<ReactNode> = ({children}) => {

	const [expenseTags, setExpenseTags] = useState<MyTag[]>(expenseInitialValue)
	const [incomeTags, setIncomeTags] = useState<MyTag[]>(incomeInitialValue)


	const onAddExpenseTags = (tag: MyTag) => {
		setExpenseTags([...expenseTags, tag])
	}

	const onAddIncomeTags = (tag: MyTag) => {
		setIncomeTags([...incomeTags, tag])
	}

	return (
		<TagsListContext.Provider
			value={{
				ExpenseIconsList,
				IncomeIconsList,
				incomeTags,
				expenseTags,
				onAddExpenseTags,
				onAddIncomeTags
			}}>
			{children}
		</TagsListContext.Provider>
	)
}

export default TagsListProvider;
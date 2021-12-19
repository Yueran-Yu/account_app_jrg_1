import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {TagsListGenerator, ExpenseIcons, IncomeIcons} from "../../utils/IconsCollections";
import useUpdate from "../../hooks/useUpdate";

const TotalExpenseTagsList = TagsListGenerator(ExpenseIcons)
const TotalIncomeTagsList = TagsListGenerator(IncomeIcons)
const expenseInitialValue = TotalExpenseTagsList.slice(0, 7)
const incomeInitialValue = TotalIncomeTagsList.slice(0, 3)

const TagsListContext = createContext<TagsListContextType | []>([])

export const useTagsListContext = () => {
	return useContext(TagsListContext) as TagsListContextType
}

const TagsListProvider: React.FC<ReactNode> = ({children}) => {

	const [expenseTags, setExpenseTags] = useState<MyTag[]>([])
	const [incomeTags, setIncomeTags] = useState<MyTag[]>([])

	useEffect(() => {
		console.log('get item')
		let localExpenseTags = JSON.parse(window.localStorage.getItem('expenseTags') || '[]')
		if (localExpenseTags.length === 0) {
			localExpenseTags = expenseInitialValue
		}
		setExpenseTags(localExpenseTags)

	}, []) // executed when component did mount

	useEffect(() => {
		let localIncomeTags = JSON.parse(window.localStorage.getItem('incomeTags') || '[]')
		if (localIncomeTags.length === 0) {
			localIncomeTags = incomeInitialValue
		}
		setIncomeTags(localIncomeTags)
	}, [])


	useUpdate(() => {
		console.log('set Item')
		window.localStorage.setItem('expenseTags', JSON.stringify(expenseTags))
	}, [expenseTags])

	useUpdate(() => {
		window.localStorage.setItem('incomeTags', JSON.stringify(incomeTags))
	}, [incomeTags])



	const onAddExpenseTags = (tag: MyTag) => {
		setExpenseTags([...expenseTags, tag])
	}

	const onAddIncomeTags = (tag: MyTag) => {
		setIncomeTags([...incomeTags, tag])
	}

	return (
		<TagsListContext.Provider
			value={{
				TotalExpenseTagsList,
				TotalIncomeTagsList,
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
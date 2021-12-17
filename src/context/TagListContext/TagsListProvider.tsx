import React, {createContext, ReactNode, useContext, useState} from "react";
import generateRandomNumber from "../../utils/IdGenerator";
import {ExpenseIcons, IncomeIcons} from "../../utils/ExpenseIcons";

const ExpenseIconsList = ExpenseIcons.map(
	Icon => ({id: generateRandomNumber(), tag: <Icon/>})
)

const IncomeIconsList = IncomeIcons.map(Icon =>
	({id: generateRandomNumber(), tag: <Icon/>}))

const initialValue = ExpenseIconsList.slice(0, 8)

const TagsListContext = createContext<TagListContextType | null>(null)

export const useTagsListContext = () => {
	return useContext(TagsListContext) as TagListContextType
}

const TagsListProvider: React.FC<ReactNode> = ({children}) => {

	const [tags, setTags] = useState<MyTag[]>(initialValue)

	console.log('######################')
	tags.map(t => console.log(t.id))

	const onAddTags = (tag: MyTag) => {
		setTags([...tags, tag])
	}

	return (
		<TagsListContext.Provider value={{ExpenseIconsList, IncomeIconsList, tags, onAddTags}}>
			{children}
		</TagsListContext.Provider>
	)
}

export default TagsListProvider;
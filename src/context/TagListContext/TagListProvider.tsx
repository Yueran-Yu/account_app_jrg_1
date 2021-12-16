import React, {createContext, ReactNode, useState} from "react";
import {MdBuild, MdCommute, MdFastfood, MdLocalDrink, MdPayment, MdWifiCalling} from "react-icons/md";

export const TagListContext = createContext<TagListContextType | null>(null)
export const generateRandomNumber = () =>
	Math.round(Date.now() * Math.random());

const TagListProvider: React.FC<ReactNode> = ({children}) => {
	const [tags, setTags] = useState<MyTag[]>([
		{id: 1, tag: <MdPayment/>},
		{id: 2, tag: <MdWifiCalling/>},
		{id: 3, tag: <MdBuild/>},
		{id: 4, tag: <MdLocalDrink/>},
		{id: 5, tag: <MdCommute/>},
		{id: 6, tag: <MdFastfood/>},
	])

	const onAddTags = (tag: MyTag) => {
		setTags([...tags, tag])
	}

	return (
		<TagListContext.Provider value={{tags, onAddTags}}>
			{children}
		</TagListContext.Provider>
	)
}

export default TagListProvider;
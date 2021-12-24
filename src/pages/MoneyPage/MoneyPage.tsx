import React, {useState} from "react";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import {TagsSection} from "../../components/Money/TagsSection/TagsSection";
import {NoteSection} from "components/Money/NoteSection/NoteSection";
import {DateSection} from "../../components/Money/DateSection/DateSection";
import {NumberPadSection} from "../../components/Money/NumberSection/NumberPadSection";
import {MyLayout, NoteDateWrapper} from "./MoneyPage.styles";
import useAccountStatement from "../../hooks/useAccountStatement";
import { DateWrapper } from "components/Money/DateSection/DateSection.style";
import generateRandomNumber from "../../utils/IdGenerator";

export const defaultFormData = {
	uniqueId:0,
	tagId: 0,
	note: '',
	date: new Date(),
	category: '-' as Category,
	amount: 0
}

const MoneyPage = () => {
	const [selected, setSelected] = useState(defaultFormData)
	const {addAccountStatement} = useAccountStatement()


	type Selected = typeof selected

	const onChangeTemplate = (obj: Partial<Selected>) => {
		setSelected({...selected, ...obj})
	}

	const submit = () => {
		selected.uniqueId = generateRandomNumber()
		addAccountStatement(selected)
		// set all input area to initial state
		setSelected(defaultFormData)
	}

	return (
		<MyLayout>
			{/*{format((selected.date), "yyyy/MM/dd E H:mma")}*/}
			<CategorySection
				value={selected.category}
				onChangeCategory={newCategory => onChangeTemplate({category: newCategory})}/>
			<TagsSection
				value={selected.tagId}
				onChangeTag={newTagId => onChangeTemplate({tagId: newTagId})}
				selectedCategory={selected.category}/>
			<NoteDateWrapper>
				<NoteSection
					value={selected.note}
					onChangeNote={newNote => onChangeTemplate({note: newNote})}/>
				<DateWrapper>
				<DateSection
					value={selected.date}
					onChangeDate={newDate => onChangeTemplate({date: newDate})}/>
				</DateWrapper>
			</NoteDateWrapper>
			<NumberPadSection
				value={selected.amount}
				onChange={newAmount => onChangeTemplate({amount: newAmount})}
				onOk={submit}/>
		</MyLayout>
	)
}

export default MoneyPage;
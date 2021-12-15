import React, {useState} from "react";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import {TagsSection} from "../../components/Money/TagSection/TagSection";
import {NoteSection} from "components/Money/NoteSection/NoteSection";
import {DateSection} from "../../components/Money/DateSection/DateSection";
import {NumberPadSection} from "../../components/Money/NumberSection/NumberPadSection";
import {MyLayout, NoteDateWrapper} from "./Money.styles";

const defaultFormData = {
	tagId: 0,
	note: '',
	date: new Date(),
	category: '-' as Category,
	amount: 0
}

const Money = () => {
	const [selected, setSelected] = useState(defaultFormData)
	type Selected = typeof selected

	const onChangeTemplate = (obj: Partial<Selected>) => {
		setSelected({...selected, ...obj})
	}

	const submit = () => {
		setSelected(defaultFormData)
		alert('Saved Successfully')
	}

	return (
		<MyLayout>
			<CategorySection
				value={selected.category}
				onChangeCategory={newCategory => setSelected({...selected, category: newCategory})}/>
			<TagsSection
				value={selected.tagId}
				onChangeTag={newTagId => setSelected({...selected, tagId: newTagId})}/>
			{/*{selected.date.toDateString()}*/}
			<NoteDateWrapper>
				<NoteSection
					value={selected.note}
					onChangeNote={newNote => setSelected({...selected, note: newNote})}/>
				<DateSection
					value={selected.date}
					onChangeDate={newDate => setSelected({...selected, date: newDate})}/>
			</NoteDateWrapper>
			<NumberPadSection
				value={selected.amount}
				onChange={amount => onChangeTemplate({amount})}
				onOk={submit}/>
		</MyLayout>
	)
}

export default Money;
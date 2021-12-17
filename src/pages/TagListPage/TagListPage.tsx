import React, {useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {BackBtn, TagWrapper, Wrapper} from "./TagListPage.style";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {isTagExist} from "../../utils/IconsCollections";

const TagListPage = () => {
	const {id} = useParams<ParamsProps>()
	let history = useHistory()
	const [selectedTag, setSelectedTag] = useState<MyTag>()
	const {
		expenseTags,
		incomeTags,
		IncomeIconsList,
		ExpenseIconsList,
		onAddExpenseTags,
		onAddIncomeTags
	} = useTagsListContext()

	const onSubmitNewTag = () => {
		if (selectedTag === undefined) {
			alert('Please select one tag and submit.')
		} else {
			if (id === '-') {
				const existedTag = isTagExist(expenseTags, selectedTag)
				existedTag ? alert('This tag already exists.') : onAddExpenseTags(selectedTag)
			} else {
				const existTag = isTagExist(incomeTags, selectedTag)
				existTag ? alert('This tag already exists.') : onAddIncomeTags(selectedTag)
			}
			history.goBack()
		}
	}

	const selectIcon = (icon: MyTag) => {
		setSelectedTag(icon)
	}

	const TagsSection = (TagsList: MyTag[]) => {
		return (
			TagsList.length > 0 ?
				TagsList.map(tag =>
					<li key={tag.id}
							onClick={() => selectIcon(tag)}
							className={selectedTag === undefined ?
								'' :
								(selectedTag.id === tag.id ? 'selected' : '')}>
						{tag.tag}
					</li>) : ''
		)
	}

	return (
		<Wrapper>
			<div>
				<BackBtn onClick={() => history.goBack()}>
					<MdOutlineArrowBackIos className='back_icon'/>
				</BackBtn>
				<button onClick={onSubmitNewTag}>OK</button>
			</div>
			<TagWrapper>
				{TagsSection(id === '-' ? ExpenseIconsList : IncomeIconsList)}
			</TagWrapper>
		</Wrapper>
	)
}

export default TagListPage;


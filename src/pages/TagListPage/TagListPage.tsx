import React, { useState} from "react";
import {useHistory} from 'react-router-dom';
import {BackBtn, TagWrapper, Wrapper} from "./TagListPage.style";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";

const TagListPage = () => {
	const [selectedTag, setSelectedTag] = useState<MyTag>()
	const {ExpenseIconsList, tags, onAddTags} = useTagsListContext()
	let history = useHistory()

	const onSubmitNewTag = () => {
		if (selectedTag === undefined) {
			alert('Please select one tag and submit.')
		} else {
			const existTag = tags.find(t => t.id === selectedTag.id)
			if (existTag) {
				alert('This tag already exists.')
			} else {
				onAddTags(selectedTag)
				history.goBack()
			}
		}
	}

	const selectIcon = (icon: MyTag) => {
		setSelectedTag(icon)
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
				{
					ExpenseIconsList.map(icon =>
						<li key={icon.id}
								onClick={() => selectIcon(icon)}
								className={selectedTag === undefined ?
									'' :
									(selectedTag.id === icon.id ? 'selected' : '')}>
							{icon.tag}
						</li>)
				}
			</TagWrapper>
		</Wrapper>
	)
}

export default TagListPage;


import React from 'react';
import {Wrapper} from './TagsSection.style';
import {Link} from 'react-router-dom';
import {useTagsListContext} from "../../../context/TagListContext/TagsListProvider";
import {ExpenseIconsHashMap, IncomeIconsHashMap} from '../../../utils/IconsCollections'

require('icons/add1.svg');


export const TagsSection: React.FC<TagProps> = ({value, onChangeTag, selectedCategory}) => {
	const {expenseTags, incomeTags} = useTagsListContext()

	const onSelectTag = (tagId: number) => {
		if (value !== tagId) {
			onChangeTag(tagId)
		}
	}

	const Tags = (TagsList: MyTag[]) => {
		return (
			TagsList.length > 0 ?
				(TagsList.map(t =>
					<li key={t.id}
							onClick={() => {onSelectTag(t.id)}}
							className={value === t.id ? 'selected' : ''}>
						{TagsList === expenseTags ? ExpenseIconsHashMap[t.tag] : IncomeIconsHashMap[t.tag]}
					</li>)) : '')
	}
	return (
		<Wrapper>
			<ol>
				{Tags(selectedCategory === '-' ? expenseTags : incomeTags)}
				<li>
					<Link to={`/tagList/${selectedCategory}`}>
						<svg className='icon'>
							<use xlinkHref={`#add1`}/>
						</svg>
					</Link>
				</li>
			</ol>
		</Wrapper>
	)
}

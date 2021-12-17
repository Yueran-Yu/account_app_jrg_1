import React from 'react';
import {Wrapper} from './TagsSection.style';
import {Link} from 'react-router-dom';
import {useTagsListContext} from "../../../context/TagListContext/TagsListProvider";

require('icons/add1.svg');

export const TagsSection: React.FC<TagProps> = ({value, onChangeTag, selectedCategory}) => {

	const {expenseTags, incomeTags} = useTagsListContext()

	const onSelectTag = (tag: MyTag) => {
		if (value !== tag.id) {
			console.log("::::::::::::::::")
			console.log(selectedCategory)
			onChangeTag(tag.id)
		}
	}

	return (
		<Wrapper>
			<ol>
				{
					selectedCategory === '-' ?
						(expenseTags.map(t => <li key={t.id}
																			onClick={() => {onSelectTag(t)}}
																			className={value === t.id ? 'selected' : ''}>{t.tag}</li>))
						: (incomeTags.map(t => <li key={t.id}
																			 onClick={() => {onSelectTag(t)}}
																			 className={value === t.id ? 'selected' : ''}>{t.tag}</li>))
				}
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

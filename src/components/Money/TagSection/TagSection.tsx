import React, {useState} from 'react';
import {Wrapper} from './TagSection.style';

require('icons/add1.svg');

interface MyTag {
	id: number,
	name: string
}

export const TagsSection: React.FC = () => {
	const [tags, setTags] = useState<MyTag[]>([
		{id: 1, name: 'Residence'},
		{id: 2, name: 'Cloth'},
		{id: 3, name: 'Travel'},
		{id: 4, name: 'Food'},
	])

	const [selectedTag, setSelectedTag] = useState<MyTag>({id: 0, name: ''})

	const onSelectTag = (tag: MyTag) => {
		if (selectedTag.id !== tag.id) {
			console.log('tag has been selected!')
			setSelectedTag(tag)
		}
	}

	const generateRandomNumber = () =>
		Math.round(Date.now() * Math.random());

	const onAddTags = () => {
		const tagName = window.prompt('Please New Tag Name: ')
		if (tagName !== null && tagName !== '') {
			setTags([
				...tags,
				{id: generateRandomNumber(), name: tagName}
			])
		}
	}

	return (
		<Wrapper>
			<ol>
				{tags.map(tag => <li
					key={tag.id}
					onClick={() => {onSelectTag(tag)}}
					className={selectedTag.id === tag.id ? 'selected' : ''}
				>{tag.name}</li>)
				}

				<svg className='icon' onClick={onAddTags}>
					<use xlinkHref={`#add1`}/>
				</svg>
			</ol>
		</Wrapper>
	)
}

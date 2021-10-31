import React, {useState} from 'react';
import {Wrapper} from './TagSection.style';

interface MyObject {
	id: number,
	name: string
}

export const TagsSection: React.FC = () => {
	const [tags, setTags] = useState<MyObject[]>([
		{id: 1, name: 'eret'},
		{id: 2, name: 'ereq'},
	])

	// const [selectedTags, setSelectedTags] = useState<MyObject[]>([])

	const addTags = () => {
		const tagName = window.prompt('Please New Tag Name: ')
		if (tagName !== null && tagName !== '') {
			setTags([...tags, {id: 4, name: tagName}])
		}
	}

	return (
		<Wrapper>
			<button onClick={addTags}>New Tag</button>
			<ol>
				{tags.map(tag =>
					<li key={tag.id}>{tag.name}</li>
				)}
			</ol>
		</Wrapper>
	)
}

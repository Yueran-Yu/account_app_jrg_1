import React, {useState} from 'react';
import {Wrapper} from './TagSection.style';

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
	const [selectedTags, setSelectedTags] = useState<MyTag[]>([])

	const onToggleTag = (tag: MyTag) => {
		const currentTag = selectedTags.find(t => t.id === tag.id)
		if (currentTag) {
			setSelectedTags(selectedTags.filter(t => t.id !== tag.id))
		} else {
			setSelectedTags([...selectedTags, tag])
		}
	}
	const addTags = () => {
		const tagName = window.prompt('Please New Tag Name: ')
		if (tagName !== null && tagName !== '') {
			setTags([...tags, {id: Math.random(), name: tagName}])
		}
	}
	const getClassName = (tag: MyTag) => {
		return selectedTags.find(t => t.id === tag.id) ? 'selected' : ''
	}
	return (
		<Wrapper>
			<button onClick={addTags}>New Tag</button>
			<ol>
				{/*获取tag的 id*/}
				{tags.map(tag => <li
					key={tag.id}
					onClick={() => {onToggleTag(tag)}}
					className={getClassName(tag)}>{tag.name}</li>)}
			</ol>
		</Wrapper>
	)
}

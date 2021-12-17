import React from 'react';
import {Wrapper} from './TagsSection.style';
import {Link} from 'react-router-dom';
import {useTagsListContext} from "../../../context/TagListContext/TagsListProvider";

require('icons/add1.svg');

export const TagsSection: React.FC<TagProps> = ({value, onChangeTag}) => {

	const {tags} = useTagsListContext()

	const onSelectTag = (tag: MyTag) => {
		if (value !== tag.id) {
			console.log('tag has been selected!')
			onChangeTag(tag.id)
		}
	}

	return (
		<Wrapper>
			<ol>
				{tags.map(t => <li key={t.id}
													 onClick={() => {onSelectTag(t)}}
													 className={value === t.id ? 'selected' : ''}>{t.tag}</li>)
				}

				<li>
					<Link to='/tagList'>
						<svg className='icon'>
							<use xlinkHref={`#add1`}/>
						</svg>
					</Link>
				</li>
			</ol>
		</Wrapper>
	)
}

import {MdPayment, MdWifiCalling, MdBuild, MdLocalDrink, MdCommute, MdFastfood} from "react-icons/md";
import React, {useState} from 'react';
import {Wrapper} from './TagSection.style';
import {Link} from 'react-router-dom';
require('icons/add1.svg');


export const TagsSection: React.FC<TagProps> = ({value, onChangeTag}) => {
	const [tags] = useState<MyTag[]>([
		{id: 1, tag: <MdPayment/>},
		{id: 2, tag: <MdWifiCalling/>},
		{id: 3, tag: <MdBuild/>},
		{id: 4, tag: <MdLocalDrink/>},
		{id: 5, tag: <MdCommute/>},
		{id: 6, tag: <MdFastfood/>},
	])

	const onSelectTag = (tag: MyTag) => {
		if (value !== tag.id) {
			console.log('tag has been selected!')
			onChangeTag(tag.id)
		}
	}

	// const generateRandomNumber = () =>
	// 	Math.round(Date.now() * Math.random());
	//
	// const onAddTags = () => {
	// 	setTags([
	// 		...tags,
	// 		{id: generateRandomNumber(), tag: <MdFastfood/>}
	// 	])
	// }

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

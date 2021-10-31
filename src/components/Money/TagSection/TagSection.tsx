import React from 'react';
import {Wrapper} from './TagSection.style';

export const TagsSection: React.FC = () => {

	return (
		<Wrapper>
			<button>New Tag</button>
			<ol>
				<li>Residence</li>
				<li>Clothing</li>
				<li>Food</li>
				<li>Travel</li>
			</ol>
		</Wrapper>
	)
}

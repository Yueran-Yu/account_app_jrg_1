/* eslint no-eval: 0 */
import React from 'react';
import {Icon} from "../../Icon";
import {Wrapper} from './NumbePadSection.style';

export const NumberPadSection: React.FC = () => {
	return (
		<Wrapper>
			<div className='outputWrapper'>
				<div className='output'>
					0
				</div>
				<span className='total'>0</span>
			</div>
			<div className='pad clearfix'>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button>
					<Icon name='delete'/>
				</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>+</button>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>-</button>
				<button>C</button>
				<button>0</button>
				<button>.</button>
				<button className='ok'>o</button>
			</div>
		</Wrapper>
	)
}



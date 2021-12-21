import React from 'react';
import {StateDetailsWrapper} from "./StateDetails.styles";
import {useParams} from "react-router-dom";
import {findTag, useTagsListContext} from "../../context/TagListContext/TagsListProvider";

const StateDetails = () => {
	const {id} = useParams<ParamsProps>()
	const {expenseTags, incomeTags} = useTagsListContext()
	const expTag = findTag(parseInt(id), expenseTags)
	const incomeTag = findTag(parseInt(id), incomeTags)

	console.log(expTag)
	console.log(incomeTag)


	return (
		<StateDetailsWrapper>
			<div className='qqq'>asdada</div>
		</StateDetailsWrapper>
	);
};

export default StateDetails;

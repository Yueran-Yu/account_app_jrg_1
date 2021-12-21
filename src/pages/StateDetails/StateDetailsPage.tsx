import React from 'react';
import {StateDetailsWrapper} from "./StateDetails.styles";
import {useHistory, useParams} from "react-router-dom";
import useAccountStatement from "../../hooks/useAccountStatement";
import {IncomeIconsHashMap, ExpenseIconsHashMap} from '../../utils/IconsCollections'
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {BackBtn} from "../TagListPage/TagListPage.styles";
import Button from "../../components/Button.styles";


const StateDetails = () => {
	const {id} = useParams<ParamsProps>()
	const history = useHistory()
	const {expenseTags, incomeTags} = useTagsListContext()
	const {findStatementDetail, disPlayStatementTags, accountStatements} = useAccountStatement()
	const stateDetail = findStatementDetail(parseInt(id), accountStatements)

	return (
		<StateDetailsWrapper>
			<div className='qqq'>
				<BackBtn onClick={() => history.goBack()}>
					<MdOutlineArrowBackIos className='back_icon'/>
				</BackBtn>
				{
					stateDetail ?
						(stateDetail.category === '-' ?
							disPlayStatementTags(stateDetail, expenseTags, ExpenseIconsHashMap)
							: disPlayStatementTags(stateDetail, incomeTags, IncomeIconsHashMap)) : ''
				}
			</div>
			<form>
				<label>
					Type
					<div className='display-category'>Expense</div>
				</label>

				<label>
					Amount
					<input className='display-category' type="text" name="amount"/>
				</label>

				<label>
					Date
					<input className='display-category' type="text" name="date"/>
				</label>

				<label>
					Note
					<input className='display-category' type="text" name="note"/>
				</label>
				<div className='ddd'>
					<Button type="submit">Complete</Button>
					<Button type="submit">Delete</Button>
				</div>
			</form>
		</StateDetailsWrapper>
	)
}

export default StateDetails;

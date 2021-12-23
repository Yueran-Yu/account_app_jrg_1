import React, {ChangeEvent} from 'react';
import {StateDetailsWrapper} from "./StateDetails.styles";
import {useHistory, useParams} from "react-router-dom";
import useAccountStatement from "../../hooks/useAccountStatement";
import {IncomeIconsHashMap, ExpenseIconsHashMap} from '../../utils/IconsCollections'
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {BackBtn} from "../TagListPage/TagListPage.styles";
import Button from "../../components/Button.styles";
import {LabelForm} from 'components/LabelForm';
import {DateSection} from "../../components/Money/DateSection/DateSection";


const StateDetails = () => {
	const {id} = useParams<ParamsProps>()
	const history = useHistory()
	const {expenseTags, incomeTags} = useTagsListContext()
	const {findStatement, accountStatements, disPlayStatementTags} = useAccountStatement()
	const stateDetail = findStatement(parseInt(id), accountStatements)


	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		// updateStatementDetails(parseInt(id), stateDetail!)
		stateDetail!.amount = parseInt(e.target.value)
		console.log(stateDetail!.amount)
	}

	const onChangeDate = (e: Date) => {
		console.log(e)
	}
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
					<span className='label-name'>Amount</span>
					<input type="text" className='display-category' value={stateDetail ? stateDetail.amount : 0}
								 name='amount'
								 onChange={onChange}/>

				</label>
				<LabelForm label='Type' classN='display-category' type='text' readOnly
									 value={stateDetail ? stateDetail.category === '-' ? 'Expense' : 'Income' : ''} name='expense'/>

				{/*<LabelForm label='Amount' id='amount' classN='display-category' type='text'*/}
				{/*					 value={stateDetail ? stateDetail.amount : 0}*/}
				{/*					 name='amount'*/}
				{/*					 onChange={onChange}/>*/}
				<label>
					<span className='label-name'>Date</span>
					<div className='display-category'>
						<DateSection value={stateDetail ? new Date(stateDetail.date) : new Date()} onChangeDate={onChangeDate}/>
					</div>
				</label>
				<LabelForm label='Note' classN='display-category' type='text' value={stateDetail ? stateDetail.note : ''}
									 name='note'
									 onChange={onChange}/>
				<div className=' ddd'>
					<Button type="submit">Save</Button>
					<Button type="submit">Delete</Button>
				</div>
			</form>
		</StateDetailsWrapper>
	);
}

export default StateDetails;

import React, {ChangeEvent,MouseEvent, FormEvent, useEffect, useState} from 'react';
import {StateDetailsWrapper} from "./StateDetails.styles";
import {useHistory, useParams} from "react-router-dom";
import useAccountStatement from "../../hooks/useAccountStatement";
import {IncomeIconsHashMap, ExpenseIconsHashMap} from '../../utils/IconsCollections'
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {BackBtn} from "../TagListPage/TagListPage.styles";
import Button from "../../components/Button.styles";
import {LabelForm} from 'components/LabelForm';
import {defaultFormData} from "../MoneyPage/MoneyPage";

const StateDetails = () => {
	const {id} = useParams<ParamsProps>()
	const history = useHistory()
	const {expenseTags, incomeTags} = useTagsListContext()
	const {accountStatements, setAccountStatements, deleteStatement,getStatementDetail, disPlayStatementTags} = useAccountStatement()
	const [stateDet, setStateDet] = useState<AccountStatementType | any>(defaultFormData)
	const stateDetail = getStatementDetail(parseInt(id))

	useEffect(() => {
		setStateDet({...stateDetail})
	}, [stateDetail])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		let obj = {[e.target.id]: e.target.value}
		console.log(obj)
		setStateDet({...stateDet, ...obj})
	}

	const submit = (e: FormEvent, formData: AccountStatementType) => {
		e.preventDefault()
		accountStatements.map(state => {
			if (state.uniqueId === formData.uniqueId) {
				state.amount = formData.amount
				state.note = formData.note
				setAccountStatements([...accountStatements])
			}
		})
		history.goBack()
	}

	const onDelete=(e:MouseEvent<HTMLButtonElement>, id: number)=>{
		e.preventDefault()
		deleteStatement(id)
		history.goBack()
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

			<form onSubmit={e => submit(e, stateDet)}>
				<LabelForm label='Type' classN='display-category no-edit' type='text' readOnly
									 value={stateDet ? stateDet.category === '-' ? 'Expense' : 'Income' : ''} name='expense'/>

				<LabelForm label='Date'
									 classN='display-category no-edit'
									 type='text'
									 readOnly
									 value={new Date(stateDet.date).toLocaleString()}
									 name='expense'/>

				<LabelForm label='Amount'
									 id='amount'
									 classN='display-category' type='number' value={stateDet.amount}
									 name='amount' onChange={onChange}/>

				<LabelForm label='Note'
									 id='note'
									 classN='display-category'
									 type='text'
									 value={stateDet.note}
									 name='note'
									 onChange={onChange}/>
				<div className=' ddd'>
					<Button type="submit">Save</Button>
					<Button type="button" onClick={(e)=>onDelete(e,stateDet.uniqueId)}>Delete</Button>
				</div>
			</form>
		</StateDetailsWrapper>
	);
}

export default StateDetails;

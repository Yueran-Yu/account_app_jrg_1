import React, {useEffect, useState} from "react";
import useUpdate from "./useUpdate";
import {defaultFormData} from "../pages/MoneyPage/MoneyPage";

const useAccountStatement = () => {

	const [accountStatements, setAccountStatements] = useState<AccountStatementType[]>([]);
	const [currentState, setCurrentState] = useState<AccountStatementType>(defaultFormData)

	useEffect(() => {
		setAccountStatements(JSON.parse(window.localStorage.getItem('accountStatements') || '[]'))

	}, [])

	useUpdate(() => {
		window.localStorage.setItem('accountStatements', JSON.stringify(accountStatements))
	}, [accountStatements])


	const addAccountStatement = (statement: AccountStatementType) => {
		if (statement.note === '' || statement.note === null) {
			alert('Sorry, you missed the note.')
		} else if (statement.tagId === 0 || statement.tagId === null) {
			alert('Sorry, please select one tag.')
		} else {
			setAccountStatements([...accountStatements, statement])
			alert('Saved Successfully')
		}
	}


	const findStatement = (tagId: number, accountStatements: AccountStatementType[]) => accountStatements.find(state => state.tagId === tagId)

	const disPlayStatementTags = (statement: AccountStatementType, originalTags: MyTag[], originalHashMap: HashMapType) => (
		originalTags.map(x => x.id === statement.tagId ? <div className='icon'>{originalHashMap[x.tag]}</div> : '')
	)

	// const updateStatementDetails = (id: number, statement: Partial<AccountStatementType>) => {
	// 	const state = accountStatements.map(state => state.tagId === id)
	// 	setAccountStatements([...accountStatements])
	// }


	return {
		currentState,
		setCurrentState,
		accountStatements,
		disPlayStatementTags,
		findStatement,
		addAccountStatement
	}
}

export default useAccountStatement;
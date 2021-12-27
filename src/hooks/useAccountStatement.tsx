import React, {useEffect, useState} from "react";
import useUpdate from "./useUpdate";
import {defaultFormData} from "../pages/MoneyPage/MoneyPage";
import {format} from "date-fns";

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
	const statesSortedByCate = (category: Category)=>  accountStatements.filter((state) => (state.category === category)).sort((a, b) => +new Date(b.date) - +new Date(a.date))


	const dateAsKeyStatements =(states: AccountStatementType[])=> states.reduce((state: { [key: string]: AccountStatementType[] }, current) => {
		let d = format((new Date(current.date)), "MM/dd/yyyy  E")
		if (!state[d]) state[d] = []
		state[d].push({...current})
		return state
	}, {})


	const getStatementDetail = (id: number) => accountStatements.find(state => state.uniqueId === id)


	const disPlayStatementTags = (statement: AccountStatementType, originalTags: MyTag[], originalHashMap: HashMapType) => (
		originalTags.map(x => x.id === statement.tagId ? <div className='icon'>{originalHashMap[x.tag]}</div> : '')
	)

	const deleteStatement = (id: number)=>{
		const newStatements = accountStatements.filter(state=> state.uniqueId !== id)
		setAccountStatements(newStatements)
	}

	return {
		currentState,
		setCurrentState,
		statesSortedByCate,
		dateAsKeyStatements,
		accountStatements,
		setAccountStatements,
		deleteStatement,
		getStatementDetail,
		disPlayStatementTags,
		addAccountStatement
	}
}

export default useAccountStatement;
import React, {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

const useAccountStatement = () => {

	const [accountStatements, setAccountStatements] = useState<AccountStatementType[]>([]);
	useEffect(() => {
		setAccountStatements(JSON.parse(window.localStorage.getItem('accountStatements') || '[]'))
	}, [])

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

	const findStatementDetail = (tagId: number, accountStatements: AccountStatementType[]) => accountStatements.find(state => state.tagId === tagId)

	const disPlayStatementTags = (statement: AccountStatementType, originalTags: MyTag[], originalHashMap: HashMapType) => (
		originalTags.map(x => x.id === statement.tagId ? <div className='icon'>{originalHashMap[x.tag]}</div> : '')
	)

	useUpdate(() => {
		window.localStorage.setItem('accountStatements', JSON.stringify(accountStatements))
	}, [accountStatements])

	return {accountStatements, disPlayStatementTags, findStatementDetail, addAccountStatement}
}

export default useAccountStatement;
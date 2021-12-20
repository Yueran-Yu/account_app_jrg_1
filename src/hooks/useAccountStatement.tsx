import {useEffect, useState} from "react";
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

	useUpdate(() => {
		window.localStorage.setItem('accountStatements', JSON.stringify(accountStatements))
	}, [accountStatements])

	return {accountStatements, addAccountStatement}
}

export default useAccountStatement;
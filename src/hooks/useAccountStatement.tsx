import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

const useAccountStatement = () => {
	const [accountStatements, setAccountStatements] = useState<AccountStatement[]>([]);
	useEffect(() => {
		setAccountStatements(JSON.parse(window.localStorage.getItem('accountStatements') || '[]'))
	}, [])


	const addAccountStatement = (statement: AccountStatement) => {
		setAccountStatements([...accountStatements, statement])
	}

	useUpdate(() => {
		window.localStorage.setItem('accountStatements', JSON.stringify(accountStatements))
	}, [accountStatements])

	return {accountStatements, addAccountStatement}
}

export default useAccountStatement;
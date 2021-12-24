import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import {AccountWrapper} from "./AccountStatementPage.styles";
import useAccountStatement from "../../hooks/useAccountStatement";
import {ExpenseIconsHashMap, IncomeIconsHashMap} from "../../utils/IconsCollections";
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";


const AccountStatementPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const {disPlayStatementTags, accountStatements} = useAccountStatement()
	const {expenseTags, incomeTags} = useTagsListContext()
	const statements = accountStatements.filter((state) => (state.category === category)).sort((a, b) => +new Date(b.date) - +new Date(a.date))

	// this is the super method of change a ordinary array object to the special object which key is date
	const dateAsKeyStatement = statements.reduce((state: { [key: string]: AccountStatementType[] }, current) => {
		let d = format((new Date(current.date)), "yyyy-MM-dd  E")
		if (!state[d]) state[d] = []
		state[d].push({...current})
		return state
	}, {})

	console.log()
	const FinalStatement = Object.keys(dateAsKeyStatement).map(key => {
			return (
				<div className='final-state'>
					<div className='date'>{key}</div>
					<div>
						{
							dateAsKeyStatement[key].map(state => (
								<Link to={`/statementDetails/${state.uniqueId}`} className='icon-wrapper'>
									<div className='icon-note'>
										{state.category === '-' ?
											disPlayStatementTags(state, expenseTags, ExpenseIconsHashMap)
											: disPlayStatementTags(state, incomeTags, IncomeIconsHashMap)}
										<div className='note-detail'>{state.note}</div>
									</div>
									<div className='amount-edit'>
										<div>${state.amount}</div>
										<div className='edit-btn'><AiOutlineEdit/></div>
									</div>
								</Link>
							))
						}
					</div>
				</div>
			)
		}
	)

	return (
		<AccountWrapper>
			<Layout>
				<div className='category-bg'>
					<CategorySection value={category} onChangeCategory={value => setCategory(value)}/>
				</div>
				{FinalStatement}
			</Layout>
		</AccountWrapper>
	)
}

export default AccountStatementPage;
import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import {AccountWrapper} from "./AccountStatementPage.styles";
import useAccountStatement from "../../hooks/useAccountStatement";
import {ExpenseIconsHashMap, IncomeIconsHashMap} from "../../utils/IconsCollections";
import {useTagsListContext} from "../../context/TagListContext/TagsListProvider";
import {format} from "date-fns";
import {Link} from "react-router-dom";

const AccountStatementPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const {accountStatements} = useAccountStatement()
	const {expenseTags, incomeTags} = useTagsListContext()

	const disPlayStatementTags = (statement: AccountStatementType, originalTags: MyTag[], originalHashMap: HashMapType) => (
		originalTags.map(x => x.id === statement.tagId ? <div className='icon'>{originalHashMap[x.tag]}</div> : '')
	)

	const statement = accountStatements.filter((state) => (state.category === category))

	// this is the super method of change a ordinary array object to the special object which key is date
	const dateAsKeyStatement = statement.reduce((state: { [key: string]: AccountStatementType[] }, current) => {
		let d = format((new Date(current.date)), "yyyy-MM-dd  E")
		if (!state[d]) state[d] = []
		state[d].push({...current})
		return state
	}, {})

	const FinalStatement = Object.keys(dateAsKeyStatement).map(key => {
			return (
				<div className='final-state'>
					<div className='date'>{key}</div>
					<div>
						{
							dateAsKeyStatement[key].map(state => (
								<Link to={`/statementDetails/${state.tagId}`} className='icon-wrapper'>
									<div className='icon-note'>
										{state.category === '-' ?
											disPlayStatementTags(state, expenseTags, ExpenseIconsHashMap)
											: disPlayStatementTags(state, incomeTags, IncomeIconsHashMap)}
										<div>{state.note}</div>
									</div>
									<div>${state.amount}</div>
								</Link>
							))
						}
					</div>
				</div>
			)
		}
	)

	console.log(dateAsKeyStatement)
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
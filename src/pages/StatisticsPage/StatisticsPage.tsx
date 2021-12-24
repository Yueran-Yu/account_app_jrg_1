import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {StatisticsWrapper} from "./StatisticsPage.styles";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";


const StatisticsPage = () => {
	const [category, setCategory] = useState<Category>('-')
	return (
		<StatisticsWrapper>
			<Layout>
				<div className='category-bg'>
					<CategorySection value={category} onChangeCategory={value => setCategory(value)}/>
				</div>
				<div className='final-statistics'>
				<h2>Statistics Page</h2>
				</div>
			</Layout>
		</StatisticsWrapper>
	)
}

export default StatisticsPage;
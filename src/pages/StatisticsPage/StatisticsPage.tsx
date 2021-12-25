import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {StatisticsWrapper} from "./StatisticsPage.styles";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import ReactECharts from 'echarts-for-react';

const StatisticsPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const options = {
		grid: {top: 8, right: 8, bottom: 24, left: 36},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: 'line',
				smooth: true,
			},
		],
		tooltip: {
			trigger: 'axis',
		},
	}

	return (
		<StatisticsWrapper>
			<Layout>
				<div className='category-bg'>
					<CategorySection value={category} onChangeCategory={value => setCategory(value)}/>
				</div>
				<div className='final-statistics'>
					<ReactECharts option={options}/>
				</div>
			</Layout>
		</StatisticsWrapper>
	)
}

export default StatisticsPage;
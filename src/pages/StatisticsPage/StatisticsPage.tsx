import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {StatisticsWrapper} from "./StatisticsPage.styles";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import ReactECharts from 'echarts-for-react';
import useAccountStatement from "../../hooks/useAccountStatement";

const StatisticsPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const {dateAsKeyStatements, statesSortedByCate} = useAccountStatement()
	const states = statesSortedByCate(category)
	const statesByDate = dateAsKeyStatements(states)


	const getOption = () => {
		let dates: string[] = []
		let amount: number[] = []
		Object.entries(statesByDate).forEach(entry => {
			const x = entry[0].toString().slice(0, 10)
			dates = Array.from(new Set([...dates, x]))
			const totalAmount = entry[1].reduce((t: number, i: AccountStatementType) => t + parseFloat(String(i.amount)), 0)
			amount = Array.from(new Set([...amount, totalAmount]))
		})

		return {
			baseOption: {
				title: {
					text: 'Statistics Line Chart',
					left: 10
				},
				xAxis: [
					{
						axisLabel: {
							interval: 0,
							rotate: 55,
							textStyle: {
								color: "#434343",
								fontSize: 13
							}
						},
						axisLine: {
							lineStyle:
								{color: "#aaa"}, show: true
						},
						type: 'category',
						data: dates,
						inverse: true,
					},
				],
				yAxis: {
					type: 'value',
					name: 'Amount',
					axisLabel: {
						formatter: '$ {value}',
						align: 'center',
						interval: 5
					},
					axisTick: {
						length: 6,
						lineStyle: {
							type: 'dashed'
						}
					}
				},
				series: [
					{
						lineStyle: {
							color: '#708fe7'
						},
						itemStyle: {
							borderWidth: 30
						},
						axisLabel: {
							formatter: '$ {value}',
							align: 'center',
						},
						symbol: 'emptyCircle',
						symbolSize: 10,
						color: 'green',
						data: amount,
						type: 'line',
						smooth: false,
					},
				],
				tooltip: {
					trigger: 'axis',
					axisPointer: {type: 'cross'},
					formatter: '{b0}<br /> Total Amount: $ {c0}'
				},
			},
			media: [
				{
					query: {
						minWidth: 800
					},
					option: {
						series: [
							{
								symbolSize: 20,
							}
						]
					}
				}
			]
		}
	}

	return (
		<StatisticsWrapper>
			<Layout>
				<div className='category-bg'>
					<CategorySection value={category} onChangeCategory={value => setCategory(value)}/>
				</div>
				<div className='final-statistics'>
					<ReactECharts
						option={getOption()}
						style={{height: "50vh", left: 20, right: 30, width: "100vw"}}
					/>
				</div>
			</Layout>
		</StatisticsWrapper>
	)
}

export default StatisticsPage;
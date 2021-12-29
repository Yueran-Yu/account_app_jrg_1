import {Layout} from "../../components/Layout";
import React, {useState} from "react";
import {StatisticsWrapper} from "./StatisticsPage.styles";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import ReactECharts from 'echarts-for-react';
import useAccountStatement from "../../hooks/useAccountStatement";
import {format} from "date-fns";

const StatisticsPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const {dateAsKeyStatements, statesSortedByDate} = useAccountStatement()
	const states = statesSortedByDate(category)
	const statesByDate = dateAsKeyStatements(states)

	let datesMap: { [key: string]: number } = {}
	let dates: string[] = []
	let today = new Date()
	for (let i = 0; i < 30; i++) {
		dates.push(format(new Date().setDate(today.getDate() - i), "MM/dd"))
		datesMap[format(new Date().setDate(today.getDate() - i), "MM/dd")] = 0
	}
	Object.entries(statesByDate).forEach(entry => {
		let key = entry[0].slice(0, 5)
		if (key in datesMap) {
			datesMap[key] = entry[1].reduce((t: number, i: AccountStatementType) => {
				return t + parseFloat(String(i.amount))
			}, 0)
		} else {
			datesMap[key] = 0
		}
	})

	const keys = Object.keys(datesMap)
	const values = Object.values(datesMap)

	const getOption = () => {
		return {
			baseOption: {
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
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							lineStyle:
								{color: "#aaa"},
							show: true
						},
						type: 'category',
						data: keys,
						inverse: true,
					},
				],
				yAxis: {
					scale: "true",
					type: 'value',
					name: 'Amount',
					axisLabel: {
						formatter: '$ {value}',
						align: 'center',
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
							color: '#708fe7',
							width: 3
						},
						itemStyle: {
							borderWidth: 10
						},

						axisLabel: {
							formatter: '$ {value}',
							align: 'center',
						},
						symbol: 'emptyCircle',
						symbolSize: 6,
						color: 'green',
						data: values,
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
						minWidth: 500
					},
					option: {
						series: [
							{
								symbolSize: 15
							},

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
					<h2 className='title'>Statistics for the past 30 days</h2>
					<ReactECharts
						className='charts'
						option={getOption()}
						style={{height: '60vh', width: '120vh', left: 0, right: 0}}

					/>
				</div>
			</Layout>
		</StatisticsWrapper>
	)
}

export default StatisticsPage;

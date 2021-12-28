import {Layout} from "../../components/Layout";
import React, {useEffect, useRef, useState} from "react";
import {StatisticsWrapper} from "./StatisticsPage.styles";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import ReactECharts from 'echarts-for-react';
import useAccountStatement from "../../hooks/useAccountStatement";
import {format} from "date-fns";

const StatisticsPage = () => {
	const [category, setCategory] = useState<Category>('-')
	const {dateAsKeyStatements, statesSortedByCate} = useAccountStatement()
	const states = statesSortedByCate(category)
	const statesByDate = dateAsKeyStatements(states)
	const chartRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (chartRef.current !== null) {
			 let divx = document.querySelector('.charts')!
			divx.scrollLeft = divx.scrollWidth
		}
	}, [])

	const getOption = () => {
		let datesMap: { [key: string]: number } = {}
		let dates: string[] = []
		let amount: number[] = []
		let today = new Date()
		for (let i = 0; i < 30; i++) {
			dates.push(format(new Date().setDate(today.getDate() - i), "MM/dd"))
			datesMap[format(new Date().setDate(today.getDate() - i), "MM/dd")] = 0
		}

		Object.entries(statesByDate).forEach(entry => {
			let key = entry[0].slice(0,5)
			if (key in datesMap) {
				amount.push(entry[1].reduce((t: number, i: AccountStatementType) => t + parseFloat(String(i.amount)), 0))
			} else {
				amount.push(0)
			}
		})

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
						axisTick:{
							alignWithLabel:true
						},
						axisLine: {
							lineStyle:
								{color: "#aaa"},
							show: true
						},
						type: 'category',
						data: dates,
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
						interval: 20
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
							width:3
						},
						itemStyle: {
							borderWidth: 15
						},

						axisLabel: {
							formatter: '$ {value}',
							align: 'center',
						},
						symbol: 'emptyCircle',
						symbolSize: 6,
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
				<div className='final-statistics' ref={chartRef}>
					<h2 className='title'>Statistics for the past 30 days</h2>
					<ReactECharts
						className='charts'
						option={getOption()}
					/>
				</div>
			</Layout>
		</StatisticsWrapper>
	)
}

export default StatisticsPage;
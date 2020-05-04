import React from 'react';
import Chart from 'react-apexcharts';

class PriceChart extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
			options: {
		 		chart: {},
		  		xaxis: {}
			},
			series: [{
		  		name: 'Giá',
		  		data: []
			}],
			type: ''
	  	}
	}

	componentDidMount() {
		const priceData = {};
		priceData.price = [];
		priceData.date = [];
		
		if(this.props.productDetail) {
			this.props.productDetail.prices.data.forEach(price => {
				//priceData.price.push(Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price.price));
				priceData.price.push(price.price.replace(/\./g,''));
				priceData.date.push(price.crawlDate);
			})
			
			this.setState({
				options: {
					chart: {
						type:'line',
						width: '50%'
					},
					xaxis: {
						categories: priceData.date
					},
					stroke: {
						curve: 'smooth'						
					},
					markers: {
						size: 5
					},
					fill: {
						type: 'solid'
					}
				},
				series: [{
					name: 'Giá',
					data:priceData.price
				}]
			})
		}

		console.log(priceData.price);
	}

	render() {
	  	return (
			<div className="chart_comp">
				<Chart 
					options={this.state.options} 
					series={this.state.series} 
					type="line"
					/>
			</div>
	  	)
	}
}

export default PriceChart;
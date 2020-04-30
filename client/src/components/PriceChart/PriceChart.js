import React from 'react';
import Chart from 'react-apexcharts';

class PriceChart extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		options: {
		  chart: {
			id: 'apexchart-example'
		  },
		  xaxis: {
			categories: []
		  }
		},
		series: [{
		  name: 'Giá',
		  data: []
		}],
		type: 'line'
	  }
	}

	componentDidMount() {
		const priceData = {};
		priceData.price = [];
		priceData.date = [];
		
		if(this.props.productDetail) {
			this.props.productDetail.prices.data.forEach(price => {
				priceData.price.push(price.price)
				priceData.date.push(price.crawlDate);
			})

			this.setState({
				options: {
					chart: {
					  id: 'apexchart-example'
					},
					xaxis: {
					  categories: priceData.date
					}
				  },
				  series: [{
					name: 'Giá',
					data: priceData.price
				  }]
			})
		}

		console.log(priceData);
	}
	render() {
	  return (
		<Chart className="chart_comp" options={this.state.options} series={this.state.series} type="line" width={500} height={320} />
	  )
	}
  }

  export default PriceChart;
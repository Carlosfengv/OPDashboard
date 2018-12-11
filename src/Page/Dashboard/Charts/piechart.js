import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartMore from 'highcharts/highcharts-more';

// 添加highcharts-more
HighchartMore(Highcharts);
var options = {
	chart: {
		type: "pie",
		reflow: true
	},
	title: {
		show: false,
		floating:true,
		text: null
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: false,
			cursor: 'pointer',
			dataLabels: {
				enabled: false,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %'
			},
			showInLegend: true
		}
	},
	series: [{
		type: 'pie',
		innerSize: '80%',
		name: '市场份额',
		data: [
			['已入驻',       26.8],
			['审核中',    8.5],
			['合约过期或禁用',       26.8],
		],
		colors:[
			"#8454cd",
			"#d5dae5",
			"#fabf3a"
		]
	}],
	credits: {  
		enabled: false     //不显示LOGO 
	}
};


class Piecharts extends Component {

    componentDidMount(){
		this.chart=new Highcharts['Chart'](this.refs.Piecontainer,options);
	}
    render(){
        return <div ref="Piecontainer" style={{width:"100%",height:"184px",marginTop:"32px"}}></div>
    }
}

export default Piecharts;
import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartMore from 'highcharts/highcharts-more';

// 添加highcharts-more
HighchartMore(Highcharts);
var options = {
	chart: {
		type: 'column'
	},
	title: {
		text: '百分比堆叠柱形图'
	},
	xAxis: {
		categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		min: 0,
		title: {
			text: '水果消费总量'
		}
	},
	tooltip: {
		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
		'({point.percentage:.0f}%)<br/>', 
		//:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting
		shared: true
	},
	plotOptions: {
		column: {
			stacking: 'percent'
		}
	},
	series: [{
		name: '新申请',
		data: [32.6, 25.9, 39.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3],
		color: '#fabf3a'
	}, {
		name: '新入驻',
		data: [32.6, 25.9, 39.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3],
		color: '#8454cd'
	}]
};


class Lincharts extends Component {
    componentDidMount(){
        this.chart=new Highcharts['Chart'](this.refs.container,options)
    }
    render(){
        return <div ref="container" style={{maxWidth:"400",height:"300"}}></div>
    }
}

export default Lincharts;
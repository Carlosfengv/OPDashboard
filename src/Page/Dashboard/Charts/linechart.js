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
		text: ''
	},
	xAxis: {
		categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		min: 0,
		title: {
			text: ''
		}
	},
	tooltip: {
		/* pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
		'({point.percentage:.0f}%)<br/>', 
		//:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting */
		shared: false,
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		footerFormat: '</table>',
		useHTML: true
	},
	plotOptions: {
		column: {
			stacking: 'normal',
			pointWidth: 12
		}
	},
	series: [{
		name: '新申请',
		data: [20, 8, 40, 32, 23, 32, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3],
		color: '#fabf3a'
	}, {
		name: '新入驻',
		data: [10, 10, 30, 12, 20, 5, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3],
		color: '#8454cd'
	}],
	credits: {  
		enabled: false     //不显示LOGO 
	}
};


class Lincharts extends Component {

    componentDidMount(){
		this.chart=new Highcharts['Chart'](this.refs.container,options);
	}
    render(){
        return <div ref="container" style={{width:"100%",height:"184px",marginTop:"32px"}}></div>
    }
}

export default Lincharts;
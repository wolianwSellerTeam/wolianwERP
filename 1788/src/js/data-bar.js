var myChart = echarts.init(document.getElementById('eChartBar'));



option = {
    color: ['#3398DB'],
    title:{
        text:'订单金额',
        textStyle:{
            fontSize:'14',
            fontWeight:'bold'
        },
        left:'15',
        top:'10'
    },
    backgroundColor:'#fff'
    ,
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',

        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'当前数值:',
            type:'bar',
            barWidth: '60%',
            data:[60, 52, 200, 334, 390, 330, 220,550,320,290,80,150],
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2BB3A7'},
                            {offset: 0.5, color: '#83DEBB'},
                            {offset: 1, color: '#B8F6CD'}
                        ]
                    )
                }
            }
        }
    ]
};



myChart.setOption(option);

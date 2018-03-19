 
var option = {
    
    tooltip: {
    	show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        text: '348,908',
        subtext: '日调用量',
        x: 'center',
        y: 'center',
        textStyle:{
                    color:'#7B8D97',
                    fontWeight:"500",
                    fontSize:26
                },
        subtextStyle:{
            color:'#7B8D97',
            fontWeight:"lighter",
            fontSize:14
        },
        itemGap:30,//主标题和副标题之间的距离，可自行设置
   },
    color:['#00B5AF', '#8FC5E5','#B8D9ED','#C2E2B0','#8FADDE'] ,
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data:['数据问题','访问问题','超速问题','内部错误','计费调用']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '62%'],
            avoidLabelOverlap: false,
            hoverAnimotion:false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'数据问题'},
                {value:310, name:'访问问题'},
                {value:234, name:'超速问题'},
                {value:135, name:'内部错误'},
                {value:1548, name:'计费调用'}
            ]
        }
    ]
};


var myChart = echarts.init(document.getElementById('daypre'));

 myChart.setOption(option);
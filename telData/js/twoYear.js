option = {

    legend: {
        data:['八月','九月','平均值'],
        bottom: '0',
    },
    xAxis: [
        {   
            type: 'category',
             splitLine:{ 
                      show:false
              },
          axisLabel :{
                interval:0
            },
         axisTick:{
            show:false
        },
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [

        { 
           show:true,
           
            axisTick:{
                show:true
            },
			
          },
        {  
           show:false,
           splitLine:{ 
                show:true
            },
        }
    ],
    series: [
        {
            name:'八月',
            type:'bar',
            barGap:"1%",
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#81A0D3'
                    }, {
                        offset: 1,
                        color: '#9FC6EA'
                    }]),
                }
            },

             data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        },
        {
            name:'九月',
            type:'bar',
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#81A0D3'
                    }, {
                        offset: 1,
                        color: '#9FC6EA'
                    }]),
                }
            },
             data:[26, 59, 90, 264, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均值',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{
                normal:{
                    color:'#ccc'
                }
            },
           data:[30, 22, 33, 45, 63, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};


var myChart = echarts.init(document.getElementById('twoYear'));

 myChart.setOption(option);
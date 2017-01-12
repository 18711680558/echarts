import echarts from 'echarts'
import template from './pies.html'
import Vue from 'vue'
import $ from 'jquery'

var Pies = Vue.extend({
    template,
    ready(){
       var myChart = echarts.init(document.getElementById('main'));
       var option = {
           backgroundColor: '#2c343c',
           title: {
           text: '工作经历',
           left: 'center',
           top: 20,
           textStyle: {
           color: '#ccc'
          }
      },

           tooltip : {
           trigger: 'item',
            formatter: "{a} <br/>{b} : {c} "
      },

           visualMap: {
           show: false,
           min: 80,
           max: 600,
           inRange: {
            colorLightness: [0, 1]
         }
      },
           series : [
          { 
            name:'工作单位',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:250, name:'广东省东莞市广东众生药业股份有限公司（2014年4月-2016年5月）'},
                {value:230, name:'江苏省昆山市金联塑料制品有限公司（2013年7月-2013年10月）'},
                {value:240, name:'广东省东莞市大朗镇深圳银捷速递物流站（2013年11月-2014年3月）'},
               
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
        myChart.setOption(option);     
   }
})
export default Pies
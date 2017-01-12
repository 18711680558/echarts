import echarts from 'echarts'
import template from './map.html'
import Vue from 'vue'
import $ from 'jquery'

var Map = Vue.extend({
    template,
    ready(){
        $.get('/echarts/datas/china.json',function(chinaJson){
            echarts.registerMap('china',chinaJson)
        var myChart = echarts.init(document.getElementById('main'))
            function randomData() {
                return Math.round(Math.random()*1000);
            }

        var option = {
            title: {
                text: '我的教育经历',
//                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['小学/初中/高中','大学']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],          
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '小学/初中/高中',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '湖南',value: 3 },
                    ]
                },
                {
                    name: '大学',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '广东',value: 1 }
                    ]
                }
            ]
        };
            myChart.setOption(option)
     })     
   }
})
export default Map
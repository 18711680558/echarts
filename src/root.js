import echarts from 'echarts'
import template from './root.html'
import Vue from 'vue'
import $ from 'jquery'
import Mapss from './mapss.js'
import Map from './map.js'
import Pies from './pies.js'
import Bottom from './bottom.js'
import Column from './column.js'

var appRoot = Vue.extend({
    template,
      data(){
        return{
            view:'maps'
      }
    },
    events:{
        'child-msg':function(msg){
            this.view=msg
        }
    },
    components:{
        mapss:Mapss,
        maps:Map,
        pies:Pies,
        bottom:Bottom,
        column:Column
    },
    methods:{
        menu(name,event){
            this.view=name
        }
    },
    active (menuId) {
        return menuId === this.View ? 'active' : ''
        }
   
})

export default appRoot
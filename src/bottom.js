import template from './bottom.html'
import Vue from 'vue'

var Bottom = Vue.extend({
    template,
    data(){
        return{
            msg:''
      }
    },
        methods:{
          notify(value,event){
              this.msg=value
              this.$dispatch('child-msg',this.msg)
        }
    }
})

export default Bottom
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {get} from './utils/axios'
// 将get挂到Vue上
Vue.prototype.$get = get
Vue.prototype.getHome = function( ) {
  wx.showLoading({
    title:'加载中...'
  })
  
  this.$get('https://www.easy-mock.com/mock/5d5a063f6092430999fb51be/demo/getHome')
  .then((res) => {
    console.log(res)
    if(res.data.code === 0) {
     
      this.bannerList = res.data.data.bannerList
      this.floorList  = res.data.data.floorList
      
    }
   
  })
  wx.hideLoading()
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

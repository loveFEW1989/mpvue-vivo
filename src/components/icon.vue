<template>
 <div class="icons">
  <div class="icon-list" v-for="(item,index) in iconList" :key="index">
    <image class="icon-img" :src="item.icon"></image>
    <text class="icon-text">{{item.text}}</text>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
         iconList: [ {
      icon: "../../static/tabs/service01.png",
      text: "官方正品"
  }, {
      icon: "../../static/tabs/service02.png",
      text: "顺丰极速达"
  }, {
      icon: "../../static/tabs/service03.png",
      text: "全国联保"
  }, {
      icon: "../../static/tabs/service04.png",
      text: "镭雕定制"
  } ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height:60rpx;
  margin-bottom:18rpx;
  background-color: #fff;
  
}
.icon-list{
  flex:1;
  display: flex;
  flex-direction: row;
 justify-content: center;
 align-items: center;
 
}
.icon-img{
  width:36rpx;
  height:36rpx;
}
.icon-text{
  font-size:20rpx;
  line-height: 60rpx;
  color:#656565
}
</style>
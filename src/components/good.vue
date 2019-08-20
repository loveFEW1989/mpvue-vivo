<template>
  <div class="item">
    
  <div class="img">
      <image class="item-img" :src="list.imageUrl"></image>
  </div>
 <div class="item-title">{{list.name}}</div>
  <div class="huod">{{list.promotion}}</div>
  <div class="item-price">{{list.salePrice}}元</div>
  <div class="desc">{{list.brief}}</div>

  </div>
</template>

<script>
  export default {
    props: {
      list: {type: Object}
    }
  }
</script>

<style lang="stylus" scoped>
.item {
  display: flex;
  flex-direction: column;
  width:250rpx;
  height:460rpx;
  justify-content: center;
  align-items: center;
  align-content center;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.img{
  
  width:200rpx;
  height:200rpx;
}
.item-img{
  width:100%;
  height:100%
}
.item-title{
font-size:22rpx;
color:#000;
font-weight:700;
line-height:42rpx;

text-align: center;
}
.huod{
line-height:34rpx;
font-size:20rpx;
color:#666;
margin:8rpx auto 10rpx;
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
}
.item-price{
font-size:26rpx;
line-height:40rpx;
color:#f81200;
font-weight:700;
position:relative;
left:-6rpx;

}
.desc{ 
font-size:18rpx;
color:#999;
text-align center;
line-height:25rpx;
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
width:200rpx;
}

</style>
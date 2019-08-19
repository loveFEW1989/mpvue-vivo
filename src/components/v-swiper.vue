<template>
<div class="swipe">
<swiper class="swiper-banner" indicator-active-color="#FFF" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in bannerList" :key="index">
            <swiper-item class="items">
                <image :src="item.imageUrl" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper>
</div>

</template>

<script>
  export default {
    data() {
      return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
      }
    },
    props: {
      bannerList: {type:Array}
    },
    onLoad() {
      
    }
  }
</script>

<style lang="stylus" scoped>
.swiper {
  width: 750rpx;
}
.swiper-banner{
  width: 100%;
  height: 526rpx;
}
.items{
  position: absolute;
  width:100%;
  height:100%
}
.slide-image{
  width:100%;
  height:100%
}
</style>
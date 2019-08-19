<template>
  <div class="page">
    <v-swiper :bannerList="bannerList"></v-swiper>
    <v-icon></v-icon>
    <div class="items" v-for="(item, index) in floorList" :key="index">
      <div class="items-head">
        <h2 class="head-title">{{item.name}}</h2>
        <span class="head-more" v-if="item.style===4">更多 ></span>
      </div>
      <div class="items-list" v-if="item.style ===1">
        <div
          :class="[item.positionList[0].style===1 ? 'height-one':'height-two', 'items-list-img' ]"
        >
          <img class="list-imgs" :src="item.positionList[0].imageUrl" />
        </div>
      </div>
      <div class="items-list items-list-flex" v-else>
        <div
          class="items-container"
          v-for="(hotitem,hotindex) in item.positionList"
          :key="hotindex"
        >
          <div class="phone-item">
            <v-phone :list="hotitem"></v-phone>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vSwiper from "../../components/v-swiper";
import vIcon from "../../components/icon";
import vPhone from "../../components/phone";
export default {
  data() {
    return {
      bannerList: [],
      floorList: []
    };
  },
  onLoad() {
    this.getHome();
  },

  components: {
    vSwiper,
    vIcon,
    vPhone
  }
};
</script>

<style  lang="stylus" scoped>
.page {
  background-color: #F7F7F7;

  .items {
    .items-head {
      position: relative;
      margin-top: 10rpx;
      background-color: #fff;
      padding: 10rpx 0;

      .head-title {
        text-align: center;
      }

      .head-more {
        position: absolute;
        line-height: 60rpx;
        width: 100rpx;
        top: 0;
        right: 0;
        font-size: 23rpx;
        color: #999;
      }
    }

    .items-list {
      width: 100%;

      .height-one {
        height: 490rpx;

        .list-imgs {
          width: 100%;
          height: 100%;
        }
      }

      .height-two {
        height: 700rpx;

        .list-imgs {
          width: 100%;
          height: 100%;
        }
      }
    }

    .items-list-flex {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
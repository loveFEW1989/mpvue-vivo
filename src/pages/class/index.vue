<template>
  <div id="wrap">
    <scroll-view  class="menu-wrapper" :scroll-into-view="navId"
             scroll-with-animation="true" >
      <ul class="menu-ul">
 <li      class="menu-item"
          v-for="(item,index) in goodsList"
          :key="index"
          :id="'nav_'+index"
          :class="[currentIndex ===index ? 'active':'', 'bar-item' ]"
          @click="selectLeft(index)"
         
          ref="item"
        >{{item.name}}
      </li>
      </ul>
     
    </scroll-view>
    <scroll-view  :scroll-y="true" class="good-wrapper"    @scroll="onScroll" :scroll-into-view="wrapIndex" :data-id="goodindex"   
    >
    <div :id="'wrap'+goodindex" v-for="(gooditem,goodindex) in goodsList" :key="goodindex"
   
   >
  <div class="list-title">-{{gooditem.name}}-</div> 
      <ul>

        <li 
         class="list-items food-list-hook" v-for="(items,indexs) in gooditem.detail.productList" :key="indexs" >
          
          <v-good
          :list="items"
          
          
          >


          </v-good>
        </li>
      </ul>

    </div>
     
    </scroll-view>
  </div>
</template>

<script>
import vGood from "../../components/good";
export default {
  data() {
   return {
     goodsList: [],
     currentIndex:0,
      barIndex: 'bar0',
      wrapIndex: 'wrap0',
      navId: '', // 左侧模块对应id 联动右侧内容区域
      listHeight: [], // 商品内部块的高度
       navulHeight: 0, // 导航里ul高度
      navItemHeight: 0, // 每个导航高度
      contentHeight: [], // 内容区域scroll-view高度
   }
  },
  onLoad() {
    
    this.getClass()
  },
  components: {vGood},
  watch: {
   goods() {
     setTimeout(() => {
        this.getGoodHeight()
     },60)
   },
   currentIndex() {
     console.log(this.currentIndex)
     if(this.contentHeight < this.navulHeight) {
       let h = this.currentIndex * this.navItemHeight
       if(h> this.contentHeight) {
        //  导航滑动
        this.navId = `nav_${this.currentIndex}`
       } else {
         this.navId = 'nav_0'
       }
     }
   }
  },
  methods: {
    selectLeft(e) {
       this.currentIndex = e
       this.wrapIndex =  'wrap'+e
       console.log( this.wrapIndex)
    },
    onScroll(e) {
      this.wrapIndex = ''
      let scrollTop = e.target.scrollTop
      console.log(scrollTop)
      let length =this.listHeight.length
      if(scrollTop >= this.listHeight[length-1] - this.contentHeight) {
        return 
      } else if (scrollTop > 0 && scrollTop< this.listHeight[0]) {
        this.currentIndex = 0
      }
      for(let i=0; i <length; i++) {
        if(scrollTop >= this.listHeight[i-1] && scrollTop< this.listHeight[i]) {
          this.currentIndex = i
        }
      }
    },
    getGoodHeight() {
      let query =  wx.createSelectorQuery()
      let h =0
      query.selectAll('.food-list-hook').boundingClientRect((rects)=> {
        rects.forEach((rect) => {
          h+= rect.height
          this.listHeight.push(h)
        })
        console.log(this.listHeight)
      })
          query.select('.good-wrapper').boundingClientRect((rect) => {
        this.contentHeight = rect.height
      })
      query.select('.menu-ul').boundingClientRect((rect) => {
        this.navulHeight = rect.height
      })
      query.select('.menu-item').boundingClientRect((rect) => {
        this.navItemHeight = rect.height
      }).exec()
    console.log(this.listHeight)
        
    }
  }
};
</script>

<style  scoped>
.menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 160rpx;
  height: 1340rpx;
  overflow-y: auto;
  background-color: #fff;
}
.bar-item {
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  font-size: 26rpx;
  color: #333;
  font-family: HYQiHei-FZS;
  font-weight: 700;
  overflow: hidden;
}
.active{
    position: relative;
  color: #00acff;
  font-size: 32rpx;
}
/* 右边的列表 */
.good-wrapper {
  padding:0;
  margin:0;
  width: 600rpx;
  float: right; 
  background-color:#fff;
  height:1340rpx;
  box-sizing: border-box;
  overflow: hidden;
}
.list-title{
  padding-top: 20rpx ;
  text-align: center;
  margin-right:20rpx;
}
.list-items {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  margin-right:40rpx;
  
}
</style>
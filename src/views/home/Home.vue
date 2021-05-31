<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControl2"
      class="tabfixed"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper class="home-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view :recommends="recommends"></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabControl"></tab-control>
      <goods-list :goods="goods[curentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowbackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import tabControl from "components/content/tabControl/tabControl";

import { getHomeMultidata, getHomeGoods } from "network/home";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    GoodsList,
    tabControl,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      curentType: "pop",
      //回到顶部的图标是否显示，默认为不显示
      isShowbackTop: false,
      //吸顶的距离默认为0
      tabOffsetTop: 0,
      //默认不需要吸顶
      isTabFixed: false,
      //离开首页时，滚动的高度，默认0
      saveY: 0,
    };
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    this.$refs.scroll.refresh();
  },
  created() {
    //1、请求多个数据
    this.getHomeMultidata();

    //2、请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    /**
     *事件监听
     */
    tabclick(index) {
      switch (index) {
        case 0:
          this.curentType = "pop";
          break;
        case 1:
          this.curentType = "new";
          break;
        case 2:
          this.curentType = "sell";
          break;
      }
      this.$refs.tabControl.curentType = index;
      this.$refs.tabControl2.curentType = index;
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //内容的滚动监听
    contentScroll(position) {
      //是否显示回到顶部的图标
      this.isShowbackTop = -position.y > 1000;

      //决定tabControl是否有吸顶效果
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.curentType);
    },
    //[流行、新款、精选]吸顶效果
    swiperImageLoad() {
      //获取tabControl的offsetTop
      //this.$refs.tabControl获取到的是组件对象
      //this.$refs.tabControl.$el获取到的是组件元素
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /**网络请求 */
    getHomeMultidata() {
      getHomeMultidata()
        .then((result) => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        // console.log(Array.isArray(this.goods[type].list));
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.refresh();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: auto;
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
  /*position: fixed;
  top: 0;
  right: 0; 
  width: 100%;
  z-index: 999;
  height: 50px;*/
  line-height: 50px;
}

/*.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}*/

.tabfixed {
  position: relative;
  z-index: 9;
}

/*.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}*/

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0px;
  left: 0px;
}
</style>

<template>
  <div id="category">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <scroll class="wrapperLeft" ref="scroll" :probe-type="3" @click.native="backClick">
      <side-control class="side-control" :categoryDatas="categoryDatas" @itemClick="contentClick"></side-control>
    </scroll>
    <scroll class="wrapperRight" ref="scroll" :probe-type="3">
      <category-detail class="category-detail" :categorydetailDatas="categorydetailDatas"></category-detail>
    </scroll>
  </div>
</template>

<script>
//网络请求
import { getCategorydata, getSubcategory } from "network/category";

//组件
import SideControl from "components/content/sideControl/sideControl";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CategoryDetail from "./childComps/CategoryDetail";

export default {
  name: "Category",
  components: {
    SideControl,
    NavBar,
    Scroll,
    CategoryDetail,
  },
  data() {
    return {
      categoryDatas: null,
      categorydetailDatas: null,
      currentIndex: 0,
      maitKey: 0,
    };
  },
  created() {
    //获取分类目录的数据
    this.getCategorydata();
  },
  watch: {
    //获取分类目录详情的数据
    categoryDatas() {
      this.$nextTick(() => {
        console.log(this.maitKey);
        this.getSubcategory(this.maitKey);
      });
    },
  },
  methods: {
    //网络请求的方法
    getCategorydata() {
      getCategorydata()
        .then((res) => {
          this.categoryDatas = res.data.category.list;
          this.maitKey = this.categoryDatas[this.currentIndex].maitKey;
          // console.log(this.categoryDatas);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSubcategory(maitKey) {
      getSubcategory(maitKey)
        .then((res) => {
          this.categorydetailDatas = res.data.list;
          console.log(this.categorydetailDatas);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //点击事件
    contentClick(index) {
      this.currentIndex = index;
      this.maitKey = this.categoryDatas[this.currentIndex].maitKey;
      this.getSubcategory(this.maitKey);
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
};
</script>

<style scoped>
#category {
  position: relative;
  width: 100vw;
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

.wrapperLeft {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: calc(100vw-95px);
  left: 0;
}

.wrapperRight {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 95px;
}
</style>

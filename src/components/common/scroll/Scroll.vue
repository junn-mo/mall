<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1、创建Bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      observeDOM: true,
      pullUpLoad: this.pullUpLoad,
    });

    //2、监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    //3、监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("滚动到底部");
        this.$emit("pullingUp");
      });
    }

    //刷新对象
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //结束下拉倒底部
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    //刷新
    refresh() {
      this.scroll.refresh();
    },
    //获取滚动离开的时候的距离
    getScrollY() {
      return this.scroll ? this.scroll : 0;
    },
  },
};
</script>
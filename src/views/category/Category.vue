<template>
  <h2>分类</h2>
  <div class="wrappper" ref="wrappper1">
    <ul class="content">
      <button @click="btnclick">按钮</button>
      <li>移动端滚动插件测试1</li>
      <li>移动端滚动插件测试2</li>
      <li>移动端滚动插件测试3</li>
      <li>移动端滚动插件测试4</li>
      <li>移动端滚动插件测试5</li>
      <li>移动端滚动插件测试6</li>
      <li>移动端滚动插件测试7</li>
      <li>移动端滚动插件测试8</li>
      <li>移动端滚动插件测试9</li>
      <li>移动端滚动插件测试10</li>
      <li>移动端滚动插件测试11</li>
      <li>移动端滚动插件测试12</li>
      <li>移动端滚动插件测试13</li>
      <li>移动端滚动插件测试14</li>
      <li>移动端滚动插件测试15</li>
      <li>移动端滚动插件测试16</li>
      <li>移动端滚动插件测试17</li>
      <li>移动端滚动插件测试18</li>
      <li>移动端滚动插件测试19</li>
      <li>移动端滚动插件测试20</li>
      <li>移动端滚动插件测试21</li>
      <li>移动端滚动插件测试22</li>
      <li>移动端滚动插件测试23</li>
      <li>移动端滚动插件测试24</li>
      <li>移动端滚动插件测试25</li>
      <li>移动端滚动插件测试26</li>
      <li>移动端滚动插件测试27</li>
      <li>移动端滚动插件测试28</li>
      <li>移动端滚动插件测试29</li>
      <li>移动端滚动插件测试30</li>
      <li>移动端滚动插件测试31</li>
      <li>移动端滚动插件测试32</li>
      <li>移动端滚动插件测试33</li>
      <li>移动端滚动插件测试34</li>
      <li>移动端滚动插件测试35</li>
      <li>移动端滚动插件测试36</li>
      <li>移动端滚动插件测试37</li>
      <li>移动端滚动插件测试38</li>
      <li>移动端滚动插件测试39</li>
      <li>移动端滚动插件测试40</li>
      <li>移动端滚动插件测试41</li>
      <li>移动端滚动插件测试42</li>
      <li>移动端滚动插件测试43</li>
      <li>移动端滚动插件测试44</li>
      <li>移动端滚动插件测试45</li>
      <li>移动端滚动插件测试46</li>
      <li>移动端滚动插件测试47</li>
      <li>移动端滚动插件测试48</li>
      <li>移动端滚动插件测试49</li>
      <li>移动端滚动插件测试50</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  /**
   * 默认情况下BScroll是不可以实时的监听滚动
   * probeType 侦测
   * 0,1都是不侦测实时的位置
   * 2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
   * 3：只要是滚动，都侦测，包括手指滚动
   */
  mounted() {
    this.scroll = new BScroll(this.$refs.wrappper1, {
      probeType: 2,
      pullUpLoad: true,
      click: true,
    });

    this.scroll.on("scroll", (position) => {
      console.log(position);
    });

    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
    });
  },
  methods: {
    btnclick() {
      console.log("btnClick");
    },
  },
};
</script>

<style scoped>
.wrappper {
  height: 150px;
  background-color: yellow;
  overflow: hidden;
}
</style>

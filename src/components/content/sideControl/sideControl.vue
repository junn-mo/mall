<template>
  <ul class="side-control">
    <li
      v-for="(item,index) in categoryDatas"
      @click="itemClick(index)"
      :class="{active: index === currentIndex}"
    >{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "sideControl",
  props: {
    categoryDatas: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.side-control {
  width: 95px;
  text-align: center;
  font-size: 14px;
}
.side-control li {
  height: 50px;
  line-height: 50px;
  background-color: rgba(218, 211, 211, 0.3);
}

.side-control .active {
  border-left: 3px solid var(--color-high-text);
  background-color: white;
  font-weight: 800;
  color: var(--color-high-text);
}
</style>

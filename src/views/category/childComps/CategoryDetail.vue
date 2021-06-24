<template>
  <ul id="category-detail">
    <li v-for="item in categorydetailDatas">
      <img :src="item.image" alt />
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryDetail",
  props: {
    categorydetailDatas: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
#category-detail::after {
  content: " ";
  display: block;
  clear: both;
}
#category-detail li {
  float: left;
  list-style-type: none;
  text-align: center;
}

#category-detail li img {
  display: block;
  width: 70px;
  height: 70px;
  margin: 10px;
}
</style>


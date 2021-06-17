<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item v-for="(item,index) in $store.state.cartList" :product="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.$refs.Scroll.refresh();
  },
};
</script>

<style scoped>
.cart-list {
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 129px;
  right: 0px;
  left: 0px;
}
</style>
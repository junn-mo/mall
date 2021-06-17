<template>
  <div class="cart-list-item">
    <div id="shop-item">
      <div class="item-selector">
        <check-button :is-checked="product.checked" @click.native="cartClick(product)" />
      </div>
      <div class="item-img">
        <img :src="product.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title ellipsis">{{product.title}}</div>
        <div class="item-desc ellipsis">{{product.desc}}</div>
        <div class="item-bootom">
          <div class="item-price">{{product.price}}</div>
          <div class="item-count">x{{product.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    cartClick(product) {
      product.checked = !product.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  border-bottom: 1px solid #ccc;
}

#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  margin: 20px 0;
  font-size: 14px;
  color: #666;
  margin-top: 15x;
}

.item-bootom {
  display: flex;
}

.item-bootom .item-price {
  flex: 1;
  text-align: left;
  color: orangered;
  font-weight: 700;
}

.item-bootom .item-count {
  flex: 1;
  text-align: right;
}
</style>

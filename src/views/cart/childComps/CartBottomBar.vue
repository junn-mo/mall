<template>
  <div class="cart-bottom-bar">
    <div class="all-check">
      <check-button
        class="check-button"
        :is-checked="iSelectAll"
        @click.native="chekClick($store.state.cartList)"
      />
      <span>全选</span>
    </div>
    <div class="total-price">合计：{{totalPrice}}</div>
    <div class="calculate">去结算({{calculate}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    //总价
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price.slice(1) * item.count + preValue;
          }, 0)
      );
    },
    //去结算
    calculate() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return item.count + preValue;
        }, 0);
    },
    //判断是否全选
    iSelectAll() {
      return this.$store.state.cartList.every((item) => item.checked === true);
    },
  },
  methods: {
    chekClick(cartList) {
      let flag = cartList.every((item) => item.checked === true);
      if (flag) {
        cartList.forEach((element) => {
          element.checked = false;
        });
      } else {
        cartList.forEach((element) => {
          element.checked = true;
        });
      }
    },
  },
};
</script>


<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
}

.all-check {
  flex: 3;
  margin: 10px 5px;
  width: 70px;
  text-align: center;
}

.check-button {
  float: left;
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 50%;
}

.all-check span {
  float: left;
  margin-left: 5px;
}

.all-check::after {
  display: block;
  clear: both;
  content: "";
}

.total-price {
  flex: 6;
  line-height: 40px;
  text-align: left;
}

.calculate {
  flex: 3;
  line-height: 40px;
  text-align: left;
}
</style>
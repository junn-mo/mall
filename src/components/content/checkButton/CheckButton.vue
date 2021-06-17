<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt :class="{check:isChecked}" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
  overflow: hidden;
}

.check {
  background-color: var(--color-tint);
  border: 1px solid var(--color-tint);
}
</style>
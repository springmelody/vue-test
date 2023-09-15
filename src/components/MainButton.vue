<template>
  <button @click="$emit('clickBtn')" class="btn" type="button">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  padding: 7px 15px;
  font-size: 21px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}
</style>

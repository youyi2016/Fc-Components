<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YyCheckboxGroup",
  provide() {
    return {
      CheckBoxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>

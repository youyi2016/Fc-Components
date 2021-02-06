<template>
  <div id="check-box-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CheckBoxGroup",
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

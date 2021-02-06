<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YyRadioGroup",
  provide() {
    return {
      radios: this,
    };
  },
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeRadio(value) {
      this.$emit("input", value);
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

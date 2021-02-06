<template>
  <div id="app">
    <RadioGroup v-model="value" @change="changeRadio">
      <Radio label="1">男</Radio>
      <Radio label="0">女</Radio>
    </RadioGroup>

    <CheckBoxGroup v-model="options">
      <CheckBox label="选项1"></CheckBox>
      <CheckBox label="选项2"></CheckBox>
    </CheckBoxGroup>

    <BackToTop></BackToTop>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      value: "0",
      checked: true,
      options: ["选项2"],
      options2: ["哈哈2", "哈哈1"],
    };
  },
  methods: {
    changeRadio(value) {
      console.log("value: ", value);
    },
  },

  computed: {
    checked1() {
      return this.options2.includes("哈哈1");
    },
    checked2() {
      return this.options2.includes("哈哈2");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>

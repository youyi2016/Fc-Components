<template>
  <div id="app">
    <RadioGroup v-model="value" @change="changeRadio">
      <Radio label="1">男</Radio>
      <Radio label="0">女</Radio>
    </RadioGroup>

    <Radio label="1" v-model="value">男</Radio>
    <Radio label="0" v-model="value">女</Radio>

    <CheckBoxGroup v-model="options">
      <CheckBox label="选项1"></CheckBox>
      <CheckBox label="选项2"></CheckBox>
    </CheckBoxGroup>
    <input type="checkbox" value="哈哈1" :checked="checked1" />哈哈1
    <input type="checkbox" value="哈哈2" :checked="checked2" />哈哈2

    <BackToTop></BackToTop>
  </div>
</template>

<script>
import BackToTop from "./components/BackToTop";
import Radio from "./components/Radio";
import RadioGroup from "./components/RadioGroup";
import CheckBox from "./components/CheckBox";
import CheckBoxGroup from "./components/CheckBoxGroup";

export default {
  name: "App",
  components: {
    BackToTop,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
  },
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

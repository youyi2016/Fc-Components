<template>
  <div class="yy-radio" @click="switchStatus">
    <slot name="yy-radio__style">
      <div class="yy-radio__btn">
        <img :src="radioStatusMap[isActive]" />
      </div>
    </slot>
    <span class="yy-radio__text" :class="isActive ? 'active' : 'default'">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </div>
</template>

<script>
import RadioActiveImg from "./assets/radio-active.svg";
import RadioDefaultImg from "./assets/radio-default.svg";
export default {
  name: "Radio",
  inject: {
    radios: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: 1,
    },
    value: {
      type: [String, Number, Boolean],
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      radioStatusMap: {
        true: RadioActiveImg,
        false: RadioDefaultImg,
      },
    };
  },
  computed: {
    isActive() {
      let value = (this.radios && this.radios.value) || this.value;
      return value === this.label && !this.disabled;
    },
  },
  methods: {
    switchStatus() {
      if (!this.disabled) {
        this.$emit("input", this.label);
        this.$emit("change", this.label);
        if (this.radios) {
          this.radios.changeRadio(this.label);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.yy-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  & + .yy-radio {
    margin-left: 10px;
  }
  .yy-radio__btn {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: 50%;
    font-family: PingFangSC;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .yy-radio__text {
    margin-left: 16px;
    &.default {
      color: #888585;
    }
    &.active {
      color: #6749ec;
    }
  }
}
</style>

import CheckBox from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import BackToTop from "./BackToTop";

const components = [CheckBox, CheckBoxGroup, Radio, RadioGroup, BackToTop];

const install = function(Vue) {
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };

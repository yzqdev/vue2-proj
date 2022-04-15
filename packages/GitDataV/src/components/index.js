import particles from "./Particles.vue";
import Github from "./Github.vue";
import Icon from "./Icon.vue";
import header from "./Header.vue";
import foot from "./Foot.vue";
import bg from "./Bg.vue";
import Databox from "./Databox.vue";
import Nodata from "./Nodata.vue";
import nouser from "./Nouser.vue";
import loading from "./Loading.vue";
import Topnav from "./Topnav.vue";
const components = {
  header,
  foot,
  bg,
  Icon,
  particles,
  Github,
   Databox,
  Nodata,
  nouser,
  loading,
  Topnav,
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach((component) => {
    Vue.component(components[component].name, components[component]);
  });
  Vue.prototype.$notice = Notification;
  // Vue.prototype.$message = Message
  install.installed = true;
};
install.installed = false;
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install,
};

export default Vcomp;

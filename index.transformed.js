import Component from "./components/Component.vue";
import {loadLang} from "./lang";
function install(app, options) {
  loadLang(options?.lang || "en-us", app);
  app.component(Component.name, Component);
}
export {
  Component,
  install
};

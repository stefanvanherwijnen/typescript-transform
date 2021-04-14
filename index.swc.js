import Component from './components/Component.vue';
import { loadLang } from './lang';
function install(app, options) {
    loadLang((options === null || options === void 0 ? void 0 : options.lang) || 'en-us', app);
    app.component(Component.name, Component);
}
export { // version,
Component, install };

import Component from './components/Component.vue'

import { loadLang } from './lang'

function install (app: any, options: { lang: string }) {
  loadLang(options?.lang || 'en-us', app)
  app.component(Component.name, Component)
}

export {
  // version,
  Component,
  install
}
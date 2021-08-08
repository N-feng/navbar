// Import vue component
import Navbar from "./components/Navbar.vue"

const components = [
  Navbar
]

// will install the plugin only once
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

// To allow use as module (npm/webpack/etc.) export component
export default { install, Navbar }

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
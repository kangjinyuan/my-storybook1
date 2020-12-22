import { Step } from 'element-ui'
import Steps from './src/steps.vue'

Steps.install = Vue => {
  Vue.component(Steps.name, Steps)
}

export default Step